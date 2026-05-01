import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-pod-primary text-pod-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-pod-accent mb-6">
            Kontakt
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.98] tracking-tight">
            Nájdete <br />
            nás <span className="italic text-pod-accent">ľahko</span>.
          </h2>

          <div className="mt-14 space-y-8">
            <div className="flex gap-5" data-testid="contact-address">
              <MapPin size={20} className="mt-1 text-pod-accent flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-pod-accent mb-1">Adresa</div>
                <div className="font-display text-xl">
                  Penzión pod Smrekom<br />
                  Slovensko
                </div>
              </div>
            </div>

            <div className="flex gap-5" data-testid="contact-phone">
              <Phone size={20} className="mt-1 text-pod-accent flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-pod-accent mb-1">Telefón</div>
                <a href="tel:+421000000000" className="font-display text-xl link-underline">
                  +421 000 000 000
                </a>
              </div>
            </div>

            <div className="flex gap-5" data-testid="contact-email">
              <Mail size={20} className="mt-1 text-pod-accent flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-pod-accent mb-1">E-mail</div>
                <a
                  href="mailto:info@podsmrekom.sk"
                  className="font-display text-xl link-underline"
                >
                  info@podsmrekom.sk
                </a>
              </div>
            </div>

            <div className="flex gap-5" data-testid="contact-hours">
              <Clock size={20} className="mt-1 text-pod-accent flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-pod-accent mb-1">Recepcia</div>
                <div className="font-display text-xl">
                  Denne 8:00 - 22:00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full h-[480px] md:h-[620px] border border-pod-bg/20 overflow-hidden">
            <iframe
              title="Penzión pod Smrekom - mapa"
              data-testid="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2613.10245645887!2d18.8943174!3d49.0846933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714f8cfe2b5d593%3A0x1b3be0cff83282b6!2sPenzion%20pod%20Smrekom!5e0!3m2!1ssk!2ssk!4v1777589233236!5m2!1ssk!2ssk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
