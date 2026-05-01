import React from "react";
import { Link } from "react-router-dom";

const DEMO_MODE = process.env.REACT_APP_DEMO_MODE === "true";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-pod-bg border-t border-pod-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-pod-primary leading-none">
              Penzión <span className="italic">pod</span> Smrekom
            </div>
            <p className="text-pod-muted mt-4 max-w-sm">
              Rodinný penzión a reštaurácia v tieni smrekov. Tradícia, domáca
              kuchyňa a tichý spánok. Od roku 2003.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-pod-secondary mb-4">
              Stránka
            </div>
            <ul className="space-y-2 text-pod-primary">
              {[
                ["O nás", "#about"],
                ["Izby", "#rooms"],
                ["Jedálny lístok", "#menu"],
                ["Rezervácia", "#reservation"],
                ["Kontakt", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="link-underline text-sm">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-pod-secondary mb-4">
              Kontakt
            </div>
            <ul className="space-y-2 text-pod-primary text-sm">
              <li><a href="tel:+421000000000" className="link-underline">+421 000 000 000</a></li>
              <li><a href="mailto:info@podsmrekom.sk" className="link-underline">info@podsmrekom.sk</a></li>
              <li className="text-pod-muted">Slovensko</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-pod-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-pod-muted">
          <div className="uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} Penzión pod Smrekom (ukážkový návrh)
          </div>
          <div className="flex gap-6 uppercase tracking-[0.22em]">
            <a href="#" className="link-underline">Ochrana údajov</a>
            <a href="#" className="link-underline">Podmienky</a>
            {!DEMO_MODE && (
              <Link to="/admin" data-testid="footer-admin-link" className="link-underline">
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
