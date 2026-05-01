# Penzión pod Smrekom — Shell Website

## Original problem
Slovak local restaurant/penzion website. Real business: Penzion pod Smrekom (Slovakia, per Google Maps embed provided). User wants a DEMO SHELL with placeholder sample text, so agency can show client and client decides what to keep. Slovak only. "Everything a proper place should have." Emphasis on creativity and efficiency.

## Architecture
- Backend: FastAPI + MongoDB (reservations CRUD under /api)
- Frontend: React + Tailwind + Shadcn primitives (sonner toast)
- Single SPA page with anchor sections + separate /admin route

## Core requirements (static)
- Purely Slovak language
- Placeholder/sample text (not real copy)
- Rustic mountain-lodge aesthetic matching photos (terracotta roof, spruce forest, Krušovice branding)
- Cormorant Garamond (display) + Work Sans (body)
- Earthy palette: bg #F9F6F0, spruce green #1E3B2D, terracotta #9C382A, brick accent #B77B50
- Google Maps embed (coords preserved from user-provided iframe)

## Implemented (Dec 2025)
- Hero with spruce forest image, rotating circular badge, asymmetric typography
- About with stats (20+ years, 8 rooms, 120 seats)
- Rooms: 3 editorial alternating layouts (Dvojlôžková, Rodinná, Apartmán Smrek)
- Menu: 5 sections (Predjedlá, Polievky, Hlavné jedlá, Dezerty, Pivo & Nápoje) with tabs + dotted leaders
- Gallery: 6-image asymmetric masonry
- Reservation form with underlined inputs, posts to /api/reservations
- Testimonials (3 quotes)
- Contact with Google Maps embed + address, phone, email, hours
- Footer with admin link
- /admin dashboard: list reservations, update status (pending/confirmed/cancelled), delete

## Backend endpoints
- GET  /api/
- POST /api/reservations
- GET  /api/reservations
- PATCH /api/reservations/{id}   body: {"status": "confirmed|cancelled|pending"}
- DELETE /api/reservations/{id}

## Backlog / P1
- Email notifications (Resend) — user declined for now
- Room photo replacement when client provides real images
- Multi-language toggle (SK/EN/PL) — declined, pure SK
- Simple admin auth (currently open)
