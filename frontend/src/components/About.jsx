import React from "react";

const IMG =
  "https://images.unsplash.com/photo-1776026020980-cd69ae72c4f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcm9vZHxlbnwwfHx8fDE3Nzc1ODk2MjR8MA&ixlib=rb-4.1.0&q=85";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-40 bg-pod-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-xs uppercase tracking-[0.35em] text-pod-secondary mb-8">
            Náš príbeh
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-pod-primary leading-[1.02] tracking-tight">
            Miesto, kde
            <span className="italic text-pod-secondary"> hostia </span>
            odchádzajú ako priatelia.
          </h2>

          <div className="mt-12 flex items-center gap-6">
            <div className="h-px w-16 bg-pod-accent" />
            <span className="font-display italic text-pod-muted text-xl">
              Rodinná tradícia od roku 2003
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-10">
          <div className="relative">
            <img
              src={IMG}
              alt="Penzión exteriér"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-pod-secondary text-pod-bg px-6 py-4 font-display text-lg italic hidden md:block">
              „Ticho v izbách. Vôňa dreva. Teplá kuchyňa."
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 pt-6">
            <p className="text-pod-text text-base leading-relaxed">
              Pod starým smrekom sa dni spomaľujú. Ráno vonia káva a les, večer
              praská drevo v krbe a v kuchyni sa varí poctivo, tak, ako to máme radi
              doma.
            </p>
            <p className="text-pod-muted text-base leading-relaxed">
              Či prídete na víkend, rodinnú oslavu alebo len na halušky po výlete,
              vždy vás privítame s úsmevom. U nás sú dôležité detaily: čistá izba,
              tichý spánok a jedlo, na ktoré sa spomína.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-pod-border">
            {[
              { n: "20+", l: "rokov tradície" },
              { n: "12", l: "útulných izieb" },
              { n: "120", l: "miest v reštaurácii" },
            ].map((s) => (
              <div key={s.l} data-testid={`stat-${s.l}`}>
                <div className="font-display text-5xl text-pod-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.22em] text-pod-muted mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
