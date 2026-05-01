import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Úvod", href: "#hero" },
  { label: "O nás", href: "#about" },
  { label: "Izby", href: "#rooms" },
  { label: "Jedálny lístok", href: "#menu" },
  { label: "Galéria", href: "#gallery" },
  { label: "Rezervácia", href: "#reservation" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      data-testid="site-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pod-bg/90 backdrop-blur-xl border-b border-pod-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5">
        <a
          href="#hero"
          data-testid="nav-logo"
          className={`font-display text-xl md:text-2xl leading-none ${
            scrolled ? "text-pod-primary" : "text-pod-bg"
          }`}
        >
          Penzión <span className="italic">pod</span> Smrekom
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              className={`text-xs uppercase tracking-[0.24em] link-underline transition-colors ${
                scrolled ? "text-pod-primary" : "text-pod-bg/90 hover:text-pod-bg"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#reservation"
          data-testid="nav-book-cta"
          className={`hidden lg:inline-flex items-center text-xs uppercase tracking-[0.22em] px-5 py-3 border transition-colors ${
            scrolled
              ? "border-pod-primary text-pod-primary hover:bg-pod-primary hover:text-pod-bg"
              : "border-pod-bg text-pod-bg hover:bg-pod-bg hover:text-pod-primary"
          }`}
        >
          Rezervovať
        </a>

        <button
          data-testid="mobile-menu-toggle"
          className={`lg:hidden p-2 ${scrolled ? "text-pod-primary" : "text-pod-bg"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-pod-bg border-t border-pod-border" data-testid="mobile-menu">
          <div className="flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-pod-primary uppercase tracking-[0.22em] text-sm border-b border-pod-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="mx-6 my-4 btn-terracotta text-center"
            >
              Rezervovať
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
