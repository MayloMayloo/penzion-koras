import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Trash2, CheckCircle2, XCircle, ArrowLeft, RefreshCw } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const statusLabel = {
  pending: "Čaká",
  confirmed: "Potvrdená",
  cancelled: "Zrušená",
};

const statusClasses = {
  pending: "bg-[#B77B50]/15 text-[#B77B50] border-[#B77B50]/40",
  confirmed: "bg-[#1E3B2D]/10 text-[#1E3B2D] border-[#1E3B2D]/30",
  cancelled: "bg-[#9C382A]/10 text-[#9C382A] border-[#9C382A]/30",
};

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const r = await axios.get(`${API}/reservations`);
      setItems(r.data);
    } catch (e) {
      toast.error("Nepodarilo sa načítať rezervácie");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`${API}/reservations/${id}`, { status });
      toast.success(`Stav zmenený: ${statusLabel[status]}`);
      load();
    } catch {
      toast.error("Chyba pri aktualizácii");
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Naozaj vymazať rezerváciu?")) return;
    try {
      await axios.delete(`${API}/reservations/${id}`);
      toast.success("Rezervácia vymazaná");
      load();
    } catch {
      toast.error("Chyba pri mazaní");
    }
  };

  return (
    <main data-testid="admin-page" className="min-h-screen bg-pod-bg">
      <header className="border-b border-pod-border/70 bg-pod-bg/85 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              data-testid="admin-back-link"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-pod-primary link-underline"
            >
              <ArrowLeft size={16} /> Späť
            </Link>
            <div className="hidden sm:block h-6 w-px bg-pod-border" />
            <h1 className="font-display text-2xl md:text-3xl text-pod-primary leading-none">
              Administrácia <span className="italic text-pod-secondary">&</span> rezervácie
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <button
              data-testid="admin-refresh-button"
              onClick={load}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-pod-muted hover:text-pod-primary transition-colors"
            >
              <RefreshCw size={14} /> Obnoviť
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pod-muted mb-2">Prehľad</p>
            <h2 className="font-display text-4xl text-pod-primary">
              {items.length} {items.length === 1 ? "rezervácia" : "rezervácií"}
            </h2>
          </div>
        </div>

        {loading ? (
          <p className="font-display italic text-pod-muted text-xl">Načítavam…</p>
        ) : items.length === 0 ? (
          <div className="border border-pod-border py-20 text-center">
            <p className="font-display italic text-2xl text-pod-muted">
              Zatiaľ žiadne rezervácie.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-pod-border bg-pod-surface/50">
            <table className="w-full text-sm" data-testid="admin-reservations-table">
              <thead>
                <tr className="text-left border-b border-pod-border">
                  {["Hosť", "Kontakt", "Izba", "Termín", "Hostia", "Stav", "Akcia"].map((h) => (
                    <th
                      key={h}
                      className="py-4 px-4 uppercase tracking-[0.2em] text-[11px] text-pod-muted font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-pod-border/60 hover:bg-pod-bg/60 transition-colors"
                    data-testid={`reservation-row-${r.id}`}
                  >
                    <td className="py-4 px-4">
                      <div className="font-display text-lg text-pod-primary">{r.name}</div>
                      {r.notes && (
                        <div className="text-xs text-pod-muted mt-1 italic max-w-xs truncate">
                          „{r.notes}"
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-pod-text">{r.email}</div>
                      <div className="text-pod-muted text-xs mt-1">{r.phone}</div>
                    </td>
                    <td className="py-4 px-4 text-pod-text">{r.room_type}</td>
                    <td className="py-4 px-4 text-pod-text">
                      <div>{r.check_in}</div>
                      <div className="text-pod-muted text-xs">→ {r.check_out}</div>
                    </td>
                    <td className="py-4 px-4 text-pod-text">{r.guests}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 text-[11px] uppercase tracking-[0.2em] border ${statusClasses[r.status] || ""}`}
                      >
                        {statusLabel[r.status] || r.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          data-testid={`confirm-btn-${r.id}`}
                          onClick={() => updateStatus(r.id, "confirmed")}
                          className="p-2 text-pod-primary hover:bg-pod-primary hover:text-pod-bg transition-colors border border-pod-primary/30"
                          title="Potvrdiť"
                        >
                          <CheckCircle2 size={15} />
                        </button>
                        <button
                          data-testid={`cancel-btn-${r.id}`}
                          onClick={() => updateStatus(r.id, "cancelled")}
                          className="p-2 text-pod-secondary hover:bg-pod-secondary hover:text-pod-bg transition-colors border border-pod-secondary/30"
                          title="Zrušiť"
                        >
                          <XCircle size={15} />
                        </button>
                        <button
                          data-testid={`delete-btn-${r.id}`}
                          onClick={() => remove(r.id)}
                          className="p-2 text-pod-muted hover:bg-pod-muted hover:text-pod-bg transition-colors border border-pod-border"
                          title="Vymazať"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
