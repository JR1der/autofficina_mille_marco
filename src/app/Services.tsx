"use client";

import {
  Battery,
  Car,
  Gauge,
  ShieldCheck,
  ThermometerSnowflake,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Wrench,
    title: "Tagliando Completo",
    description:
      "Manutenzione periodica per mantenere la tua auto sempre efficiente e sicura.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Ricarica Aria Condizionata",
    description:
      "Controllo e ricarica del climatizzatore per viaggi confortevoli in ogni stagione.",
  },
  {
    icon: Gauge,
    title: "Diagnosi Computerizzata",
    description:
      "Analisi elettronica avanzata per individuare rapidamente guasti e anomalie.",
  },
  {
    icon: Battery,
    title: "Batteria e Impianto Elettrico",
    description:
      "Sostituzione batterie e riparazione impianti elettrici per garantire affidabilità.",
  },
  {
    icon: Car,
    title: "Meccanica Generale",
    description:
      "Riparazioni su motore, freni, sospensioni e trasmissioni per ogni tipo di veicolo.",
  },
  {
    icon: ShieldCheck,
    title: "Revisione e Sicurezza",
    description:
      "Preparazione e assistenza alla revisione per viaggiare senza pensieri.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          I Nostri Servizi
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
