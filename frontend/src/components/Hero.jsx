import React from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1685560366855-c0c183537c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxzcHJ1Y2UlMjBmb3Jlc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc3NTg5NjI0fDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[92vh] w-full overflow-hidden grain"
    >
      <img
        src={HERO_IMG}
        alt="Smrekový les v podhorí"
        className="absolute inset-0 w-full h-full object-cover saturate-[1.15] contrast-[1.12] brightness-[1.02]"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* rotating badge */}
      <div className="absolute top-28 right-8 md:right-16 hidden md:flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-32 h-32 slow-spin">
          <defs>
            <path
              id="circle"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="#F9F6F0" fontFamily="Work Sans" fontSize="10" letterSpacing="4">
            <textPath href="#circle">
              • SRDCE KYSÚC • TRADÍCIA OD 2003 • DOMÁCA KUCHYŇA •
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-[92vh] flex flex-col justify-end pb-24 md:pb-32">
        <p
          data-testid="hero-eyebrow"
          className="rise text-pod-bg/90 uppercase tracking-[0.45em] text-xs md:text-sm mb-8"
        >
          Penzión · Reštaurácia · Rodinná atmosféra
        </p>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_260px] items-start gap-10 lg:gap-14">
          <div>
            <h1
              data-testid="hero-heading"
              className="rise rise-d1 font-display text-pod-bg leading-[0.92] tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] hero-text-shadow"
            >
              Pod starým<br />
              <span className="italic text-pod-accent">smrekom</span>,<br />
              doma.
            </h1>

            <div className="rise rise-d2 mt-10 max-w-xl">
              <p className="text-pod-bg/90 text-lg leading-relaxed hero-text-shadow">
                Útulný horský penzión s reštauráciou v tieni storočných smrekov.
                Ručne varené jedlá, čapované pivo Krušovice a ticho, aké v meste nezažijete.
              </p>
            </div>

            <div className="rise rise-d3 mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#reservation" data-testid="hero-reserve-btn" className="btn-terracotta">
                Rezervovať pobyt
              </a>
              <a
                href="#menu"
                data-testid="hero-menu-btn"
                className="inline-flex items-center justify-center gap-2 border border-pod-bg/80 text-pod-bg px-8 py-4 text-sm tracking-[0.22em] uppercase hover:bg-pod-bg hover:text-pod-primary transition-colors"
              >
                Jedálny lístok
              </a>
            </div>
          </div>

          <aside
            className="hidden lg:flex flex-col justify-start mt-6 rise rise-d3"
            data-testid="hero-stats"
          >
            <div className="pl-10 border-l border-pod-bg/25">
              <div className="text-[11px] uppercase tracking-[0.35em] text-pod-bg/70">
                Prehľad
              </div>
              <div className="mt-2 text-xs text-pod-bg/60">
                Malé veci, ktoré robia pobyt príjemným.
              </div>

              <div className="mt-7 space-y-7">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-pod-bg/70">
                    Hodnotenie
                  </div>
                  <div className="font-display text-5xl leading-none text-pod-bg">
                    4,4 <span className="text-pod-bg/70 text-2xl align-baseline">★</span>
                  </div>
                  <div className="mt-2 text-xs text-pod-bg/60 tracking-wide">
                    192 recenzií
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-pod-bg/70">
                    Izby
                  </div>
                  <div className="font-display text-5xl leading-none text-pod-bg">12</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-pod-bg/70">
                    Od
                  </div>
                  <div className="font-display text-5xl leading-none text-pod-bg">
                    55 <span className="text-pod-bg/60 text-xl">€ / noc</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-xs text-pod-bg/55 tracking-wide">
                Ukážkové údaje.
              </div>
            </div>
          </aside>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-pod-bg/80 hover:text-pod-bg transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
