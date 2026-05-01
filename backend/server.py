from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
# Defaults make local dev start even if .env is missing.
mongo_url = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
db_name = os.environ.get("DB_NAME", "penzion")
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI(title="Penzión pod Smrekom API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class Reservation(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    room_type: str
    check_in: str  # ISO date string YYYY-MM-DD
    check_out: str
    guests: int = 1
    notes: Optional[str] = ""
    status: str = "pending"  # pending | confirmed | cancelled
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ReservationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    room_type: str
    check_in: str
    check_out: str
    guests: int = 1
    notes: Optional[str] = ""


class ReservationStatusUpdate(BaseModel):
    status: str


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Penzión pod Smrekom API"}


@api_router.post("/reservations", response_model=Reservation)
async def create_reservation(payload: ReservationCreate):
    obj = Reservation(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.reservations.insert_one(doc)
    return obj


@api_router.get("/reservations", response_model=List[Reservation])
async def list_reservations():
    items = await db.reservations.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.patch("/reservations/{reservation_id}", response_model=Reservation)
async def update_reservation_status(reservation_id: str, payload: ReservationStatusUpdate):
    if payload.status not in {"pending", "confirmed", "cancelled"}:
        raise HTTPException(status_code=400, detail="Neplatný stav")
    result = await db.reservations.find_one_and_update(
        {"id": reservation_id},
        {"$set": {"status": payload.status}},
        projection={"_id": 0},
        return_document=True
    )
    if not result:
        raise HTTPException(status_code=404, detail="Rezervácia sa nenašla")
    if isinstance(result.get('created_at'), str):
        result['created_at'] = datetime.fromisoformat(result['created_at'])
    return result


@api_router.delete("/reservations/{reservation_id}")
async def delete_reservation(reservation_id: str):
    result = await db.reservations.delete_one({"id": reservation_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Rezervácia sa nenašla")
    return {"ok": True}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
