import React from "react";
import { ArrowUpRight } from "lucide-react";

const rooms = [
  {
    id: "dvojlozkova",
    name: "Dvojlôžková izba",
    subtitle: "Pre dvoch, s výhľadom do lesa",
    price: "od 55 €",
    img: "https://images.unsplash.com/photo-1574790413799-c2a5a4ba4d02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY2FiaW4lMjBiZWRyb29tfGVufDB8fHx8MTc3NzU4OTYyNHww&ixlib=rb-4.1.0&q=85",
    features: ["Vlastná kúpeľňa", "TV, Wi-Fi", "Raňajky v cene", "Parkovanie"],
    desc: "Priestranná izba pre dvoch s manželskou posteľou, drevenými detailmi a výhľadom do smrekovej zelene. Ideálna, keď chcete ticho a ráno pomaly.",
  },
  {
    id: "rodinna",
    name: "Rodinná izba",
    subtitle: "Pre rodiny s deťmi",
    price: "od 85 €",
    img: "https://images.unsplash.com/photo-1660321398531-489358ea488f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FiaW4lMjBiZWRyb29tfGVufDB8fHx8MTc3NzU4OTYyNHww&ixlib=rb-4.1.0&q=85",
    features: ["Až 4 osoby", "Detská postieľka", "Kuchynský kút", "Terasa"],
    desc: "Priestor pre rodiny až do štyroch osôb. Samostatná spálňa, obývačka s rozkladacou pohovkou a miesto na hračky aj kufre, aby ste mali pohodlie bez kompromisov.",
  },
  {
    id: "apartman",
    name: "Apartmán Smrek",
    subtitle: "Pre dlhodobé pobyty",
    price: "od 110 €",
    img: "https://images.unsplash.com/photo-1685560366855-c0c183537c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxzcHJ1Y2UlMjBmb3Jlc3QlMjBtb3VudGFpbnN8ZW58MHx8fHwxNzc3NTg5NjI0fDA&ixlib=rb-4.1.0&q=85",
    features: ["2 spálne", "Plná kuchyňa", "Krb", "Súkromný vchod"],
    desc: "Celý apartmán pre seba. Dve spálne, obývačka s krbom, plne vybavená kuchyňa a terasa, keď chcete zostať dlhšie a žiť tu ako doma.",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      data-testid="rooms-section"
      className="py-24 md:py-32 bg-pod-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-pod-secondary mb-6">
              Ubytovanie
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-pod-primary leading-[0.98] tracking-tight max-w-3xl">
              Naše <span className="italic">izby</span>
            </h2>
          </div>
          <p className="text-pod-muted max-w-md text-base leading-relaxed">
            Každá izba má svoj charakter, svoje ticho a svoj výhľad. Vyberte si
            podľa nálady alebo počasia.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rooms.map((r, i) => (
            <article
              key={r.id}
              data-testid={`room-${r.id}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-[380px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 bg-pod-bg/90 backdrop-blur-sm px-4 py-2 font-display text-sm tracking-wider">
                    {String(i + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.3em] text-pod-accent mb-4">
                  {r.subtitle}
                </p>
                <h3 className="font-display text-4xl md:text-5xl text-pod-primary leading-tight mb-6">
                  {r.name}
                </h3>
                <p className="text-pod-text leading-relaxed mb-8">{r.desc}</p>

                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-10">
                  {r.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-pod-muted border-l border-pod-accent pl-3"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between border-t border-pod-border pt-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-pod-muted mb-1">
                      Cena za noc
                    </div>
                    <div className="font-display text-4xl text-pod-secondary">
                      {r.price}
                    </div>
                  </div>
                  <a
                    href="#reservation"
                    data-testid={`book-room-${r.id}`}
                    className="inline-flex items-center gap-2 text-pod-primary text-sm uppercase tracking-[0.22em] link-underline"
                  >
                    Rezervovať <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
