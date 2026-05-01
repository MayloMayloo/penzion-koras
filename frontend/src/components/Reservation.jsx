import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";

const DEMO_MODE = process.env.REACT_APP_DEMO_MODE === "true";
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const roomOptions = [
  "Dvojlôžková izba",
  "Rodinná izba",
  "Apartmán Smrek",
];

const initial = {
  name: "",
  email: "",
  phone: "",
  room_type: roomOptions[0],
  check_in: "",
  check_out: "",
  guests: 2,
  notes: "",
};

export default function Reservation() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.check_in || !form.check_out) {
      toast.error("Prosím, vyplňte všetky povinné polia.");
      return;
    }
    if (form.check_out <= form.check_in) {
      toast.error("Dátum odchodu musí byť po dátume príchodu.");
      return;
    }

    if (DEMO_MODE) {
      toast.success("Demo: formulár odoslaný", {
        description: "V ostrej verzii sa to odošle do systému a príde potvrdenie e-mailom.",
      });
      setForm(initial);
      return;
    }

    setSending(true);
    try {
      await axios.post(`${API}/reservations`, {
        ...form,
        guests: Number(form.guests),
      });
      toast.success("Ďakujeme! Vašu rezerváciu sme prijali.", {
        description: "Ozveme sa vám do 24 hodín na potvrdenie.",
      });
      setForm(initial);
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Niečo sa pokazilo. Skúste to prosím znova.";
      toast.error(typeof msg === "string" ? msg : "Chyba pri odosielaní.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="reservation"
      data-testid="reservation-section"
      className="py-24 md:py-32 bg-pod-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-pod-secondary mb-6">
            Rezervácia
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-pod-primary leading-[0.98] tracking-tight">
            Zvoľte si <span className="italic">termín</span>.
          </h2>
          <p className="text-pod-muted mt-8 max-w-md leading-relaxed">
            Vyplňte formulár a my sa vám ozveme do 24 hodín s potvrdením
            dostupnosti a ďalšími informáciami.
          </p>

          <div className="mt-12 space-y-5 text-sm">
            <div>
              <div className="text-pod-accent uppercase tracking-[0.25em] text-xs mb-1">
                Ubytovanie od
              </div>
              <div className="font-display text-2xl text-pod-primary">55 € / noc</div>
            </div>
            <div>
              <div className="text-pod-accent uppercase tracking-[0.25em] text-xs mb-1">
                Raňajky v cene
              </div>
              <div className="font-display text-2xl text-pod-primary">Áno, vždy</div>
            </div>
            <div>
              <div className="text-pod-accent uppercase tracking-[0.25em] text-xs mb-1">
                Deti do 6 rokov
              </div>
              <div className="font-display text-2xl text-pod-primary">Zadarmo</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 space-y-8"
          data-testid="reservation-form"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="pod-label" htmlFor="res-name">Meno a priezvisko*</label>
              <input
                id="res-name"
                data-testid="res-name"
                className="pod-input"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jozef Novák"
                required
              />
            </div>
            <div>
              <label className="pod-label" htmlFor="res-email">E-mail*</label>
              <input
                id="res-email"
                data-testid="res-email"
                type="email"
                className="pod-input"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jozef@priklad.sk"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="pod-label" htmlFor="res-phone">Telefón*</label>
              <input
                id="res-phone"
                data-testid="res-phone"
                className="pod-input"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+421 ..."
                required
              />
            </div>
            <div>
              <label className="pod-label" htmlFor="res-room">Typ izby</label>
              <select
                id="res-room"
                data-testid="res-room"
                className="pod-input appearance-none"
                value={form.room_type}
                onChange={(e) => update("room_type", e.target.value)}
              >
                {roomOptions.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <label className="pod-label" htmlFor="res-in">Príchod*</label>
              <input
                id="res-in"
                data-testid="res-checkin"
                type="date"
                className="pod-input"
                value={form.check_in}
                onChange={(e) => update("check_in", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="pod-label" htmlFor="res-out">Odchod*</label>
              <input
                id="res-out"
                data-testid="res-checkout"
                type="date"
                className="pod-input"
                value={form.check_out}
                onChange={(e) => update("check_out", e.target.value)}
                required
              />
            </div>
            <div>
              <label className="pod-label" htmlFor="res-guests">Počet hostí</label>
              <input
                id="res-guests"
                data-testid="res-guests"
                type="number"
                min={1}
                max={10}
                className="pod-input"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="pod-label" htmlFor="res-notes">Poznámka</label>
            <textarea
              id="res-notes"
              data-testid="res-notes"
              rows={3}
              className="pod-input resize-none"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Zvláštne požiadavky, alergie, čas príchodu…"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <button
              type="submit"
              data-testid="reservation-submit-button"
              disabled={sending}
              className="btn-terracotta disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Odosielam…" : "Odoslať rezerváciu"}
              {!sending && <Send size={14} />}
            </button>
            <p className="text-xs text-pod-muted tracking-wide">
              * Odpovieme do 24 hodín. Odoslaním súhlasíte so spracovaním osobných údajov.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
