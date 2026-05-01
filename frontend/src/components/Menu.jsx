import React, { useState } from "react";

const menuSections = [
  {
    id: "predjedla",
    title: "Predjedlá",
    items: [
      { name: "Domáca paštéta z diviny", desc: "s brusnicami a opekaným chlebom", price: "6,50 €" },
      { name: "Tatarák z hovädzieho", desc: "klasika podávaná s cesnakovými hriankami", price: "12,90 €" },
      { name: "Utopenec", desc: "pivný nakladaný párok s cibuľou", price: "4,20 €" },
    ],
  },
  {
    id: "polievky",
    title: "Polievky",
    items: [
      { name: "Kapustnica", desc: "s údeným mäsom a hubami", price: "4,80 €" },
      { name: "Cesnačka v chlebe", desc: "klasická domáca polievka", price: "5,50 €" },
      { name: "Hovädzí vývar", desc: "s rezancami a zeleninou", price: "3,80 €" },
    ],
  },
  {
    id: "hlavne",
    title: "Hlavné jedlá",
    items: [
      { name: "Bryndzové halušky", desc: "so slaninkou, domáca bryndza", price: "8,90 €" },
      { name: "Svíčková na smotane", desc: "s knedľou a brusnicami", price: "11,50 €" },
      { name: "Pečené koleno", desc: "s chrenom, horčicou a chlebom (min. 2 osoby)", price: "18,90 €" },
      { name: "Jelení guláš", desc: "so slížikmi a brusnicami", price: "14,50 €" },
      { name: "Pstruh na masle", desc: "s varenými zemiakmi a citrónom", price: "13,90 €" },
    ],
  },
  {
    id: "dezerty",
    title: "Dezerty",
    items: [
      { name: "Domáci štrúdľa", desc: "jablková, s vanilkovou omáčkou", price: "4,50 €" },
      { name: "Medovník", desc: "starej mamy", price: "3,80 €" },
      { name: "Palacinky", desc: "s marmeládou alebo orechmi", price: "4,20 €" },
    ],
  },
  {
    id: "pivo",
    title: "Pivo & Nápoje",
    items: [
      { name: "Krušovice 10° čapované", desc: "0,5 l", price: "2,20 €" },
      { name: "Krušovice 12° čapované", desc: "0,5 l", price: "2,50 €" },
      { name: "Domáca limonáda", desc: "mätová / malinová / bazová, 0,3 l", price: "2,80 €" },
      { name: "Borovička Spiš", desc: "4 cl", price: "1,80 €" },
      { name: "Čaj z hôr", desc: "s medom a citrónom", price: "2,00 €" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState(menuSections[0].id);
  const current = menuSections.find((s) => s.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-24 md:py-32 bg-pod-primary text-pod-bg relative overflow-hidden"
    >
      {/* decorative */}
      <div className="absolute top-12 right-12 font-display text-[18rem] leading-none text-pod-bg/5 select-none pointer-events-none hidden md:block">
        &amp;
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-pod-accent mb-6">
            Reštaurácia
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight max-w-3xl">
            Jedálny <span className="italic text-pod-accent">lístok</span>
          </h2>
          <p className="mt-6 max-w-xl text-pod-bg/75">
            Domáca kuchyňa podľa sezóny. Suroviny od miestnych gazdov,
            recepty od starých mám.
          </p>
        </div>

        {/* Section tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16 border-b border-pod-bg/15 pb-4">
          {menuSections.map((s) => (
            <button
              key={s.id}
              data-testid={`menu-tab-${s.id}`}
              onClick={() => setActive(s.id)}
              className={`text-xs uppercase tracking-[0.3em] py-2 transition-all border-b-2 ${
                active === s.id
                  ? "border-pod-accent text-pod-accent"
                  : "border-transparent text-pod-bg/70 hover:text-pod-bg"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h3 className="font-display italic text-4xl text-pod-accent mb-10">
              {current.title}
            </h3>

            <div className="space-y-8">
              {current.items.map((item, i) => (
                <div
                  key={i}
                  data-testid={`menu-item-${current.id}-${i}`}
                  className="rise"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="menu-row">
                    <div className="flex items-baseline gap-3 overflow-hidden">
                      <span className="font-display text-2xl md:text-3xl whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="leaders flex-1 min-w-4" />
                    </div>
                    <span className="font-display text-2xl md:text-3xl text-pod-accent whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="text-pod-bg/70 text-sm mt-1 italic max-w-2xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pl-10 lg:border-l border-pod-bg/15">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-[0.3em] text-pod-accent mb-4">
                Otváracie hodiny
              </p>
              <div className="space-y-2 text-pod-bg/85 font-display text-lg">
                <div className="flex justify-between">
                  <span>Po - Št</span><span>11:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pia - So</span><span>11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Nedeľa</span><span>11:00 - 21:00</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-pod-bg/15">
                <p className="text-xs uppercase tracking-[0.3em] text-pod-accent mb-4">
                  Rezervácia stola
                </p>
                <p className="text-pod-bg/80 mb-4">
                  Radi vás privítame. Pri väčšej skupine odporúčame zavolať vopred.
                </p>
                <a
                  href="tel:+421000000000"
                  className="font-display text-2xl text-pod-bg link-underline inline-block"
                >
                  +421 000 000 000
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
