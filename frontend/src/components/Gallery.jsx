import React from "react";

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1707546944460-dda9069b9c1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxydXN0aWMlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3Nzc1ODk2MjR8MA&ixlib=rb-4.1.0&q=85",
    label: "Domáca kuchyňa",
    h: "h-[380px] md:h-[520px]",
    col: "col-span-12 md:col-span-8",
  },
  {
    src: "https://images.unsplash.com/photo-1613988753246-6769bc4a2e67?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMG9mJTIwZHJhZnQlMjBiZWVyJTIwb24lMjB3b29kZW4lMjB0YWJsZXxlbnwwfHx8fDE3Nzc1ODk2MzV8MA&ixlib=rb-4.1.0&q=85",
    label: "Čapované pivo",
    h: "h-[240px] md:h-[250px]",
    col: "col-span-12 md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1574790413799-c2a5a4ba4d02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxjb3p5JTIwY2FiaW4lMjBiZWRyb29tfGVufDB8fHx8MTc3NzU4OTYyNHww&ixlib=rb-4.1.0&q=85",
    label: "Útulné izby",
    h: "h-[260px] md:h-[260px]",
    col: "col-span-12 md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1760112408921-a6349758037f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxjaGFsa2JvYXJkJTIwbWVudSUyMHJlc3RhdXJhbnR8ZW58MHx8fHwxNzc3NTg5NjMxfDA&ixlib=rb-4.1.0&q=85",
    label: "Denné menu",
    h: "h-[300px] md:h-[420px]",
    col: "col-span-12 md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1776026020980-cd69ae72c4f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwcm9vZHxlbnwwfHx8fDE3Nzc1ODk2MjR8MA&ixlib=rb-4.1.0&q=85",
    label: "Penzión",
    h: "h-[300px] md:h-[420px]",
    col: "col-span-12 md:col-span-7",
  },
  {
    src: "https://images.unsplash.com/photo-1660321398531-489358ea488f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FiaW4lMjBiZWRyb29tfGVufDB8fHx8MTc3NzU4OTYyNHww&ixlib=rb-4.1.0&q=85",
    label: "Izba s výhľadom",
    h: "h-[280px] md:h-[280px]",
    col: "col-span-12 md:col-span-4",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 md:py-32 bg-pod-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-pod-secondary mb-6">
              Impresie
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-pod-primary leading-[0.98] tracking-tight">
              Galéria
            </h2>
          </div>
          <p className="text-pod-muted max-w-sm">
            Každá fotka nesie kus nášho ticha, dreva, chleba a hostí.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {imgs.map((im, i) => (
            <figure
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`${im.col} relative group overflow-hidden`}
            >
              <img
                src={im.src}
                alt={im.label}
                className={`w-full ${im.h} object-cover group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out`}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <span className="text-pod-bg uppercase tracking-[0.25em] text-xs md:text-sm">
                  {im.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
