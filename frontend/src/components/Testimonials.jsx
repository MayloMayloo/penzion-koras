import React from "react";

const reviews = [
  {
    text: "Ticho, smreky a raňajky, po ktorých sme sa ešte v ten istý deň vrátili na obed. Úplne domáca atmosféra a úprimná obsluha.",
    author: "Mária K.",
    meta: "Bratislava · Júl 2024",
  },
  {
    text: "Najlepšie bryndzové halušky široko-ďaleko a čapovaná dvanástka presne taká, aká má byť. Večer pri krbe bol top.",
    author: "Peter H.",
    meta: "Brno · September 2024",
  },
  {
    text: "Boli sme s deťmi a nechcelo sa nám odísť. Pokojná izba, super kuchyňa a priestor, kde sa deti nenudia.",
    author: "Rodina Baránková",
    meta: "Žilina · August 2024",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-pod-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-pod-secondary mb-6">
            Návštevníci píšu
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-pod-primary leading-[0.98] tracking-tight max-w-3xl">
            Čo hovoria <span className="italic">naši hostia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={i}
              data-testid={`review-${i}`}
              className="border-t border-pod-primary pt-8 flex flex-col"
            >
              <div className="font-display text-6xl text-pod-secondary leading-none mb-4">
                &ldquo;
              </div>
              <blockquote className="font-display italic text-xl md:text-2xl text-pod-primary leading-snug flex-1">
                {r.text}
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="uppercase tracking-[0.25em] text-pod-primary">
                  {r.author}
                </div>
                <div className="text-pod-muted mt-1">{r.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
