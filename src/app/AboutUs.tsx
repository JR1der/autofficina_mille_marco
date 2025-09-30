import {
    GraduationCap,
    Handshake,
    History,
    KeySquare,
    ShieldCheck,
    Wrench,
} from "lucide-react";
  
  export default function AboutUs() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-(--breakpoint-lg) mx-auto py-12 px-6">
          <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-13 font-semibold tracking-tight text-center">
            La Nostra Officina: <br />
            Esperienza, Trasparenza e Qualità
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="md:hidden mb-6 aspect-[2/1] w-full rounded-xl overflow-hidden">
                <img src="parts.webp" alt="La Nostra Storia" className="w-full h-full object-cover" />
              </div>
  
              <span className="text-xl font-semibold tracking-tight">
                La Nostra Storia
              </span>
  
              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <History className="shrink-0" />
                    <p className="-mt-0.5">
                      Da oltre 20 anni ci prendiamo cura delle auto con passione e
                      professionalità.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Wrench className="shrink-0" />
                    <p className="-mt-0.5">
                      Offriamo un servizio completo: manutenzione, riparazioni e
                      assistenza personalizzata.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
  
            {/* Media 1 Desktop */}
            <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden aspect-[2/1]">
              <img src="parts.webp" alt="Ricambi e parti auto" className="w-full h-full object-cover" />
            </div>
  
            {/* Media 2 Desktop */}
            <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden aspect-[2/1]">
              <img src="garage_porsche.jpeg" alt="Officina con Porsche" className="w-full h-full object-cover" />
            </div>
  
            {/* Card 2 */}
            <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="md:hidden mb-6 aspect-[2/1] w-full rounded-xl overflow-hidden">
                <img src="garage_porsche.jpeg" alt="I Nostri Valori" className="w-full h-full object-cover" />
              </div>
  
              <span className="text-xl font-semibold tracking-tight">
                I Nostri Valori
              </span>
  
              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <Handshake className="shrink-0" />
                    <p className="-mt-0.5">
                      Trasparenza nei preventivi e chiarezza nei tempi di
                      intervento.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="shrink-0" />
                    <p className="-mt-0.5">
                      Fiducia e rapporto diretto con ogni cliente: la tua auto è
                      nelle mani giuste.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
  
            {/* Card 3 */}
            <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
              <div className="md:hidden mb-6 aspect-[2/1] w-full rounded-xl overflow-hidden">
                <img src="mechanic_portrait.webp" alt="Professionalità" className="w-full h-full object-cover" />
              </div>
  
              <span className="text-xl font-semibold tracking-tight">
                Professionalità
              </span>
  
              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="shrink-0" />
                    <p className="-mt-0.5">
                      Tecnici qualificati e in costante aggiornamento sulle nuove
                      tecnologie automobilistiche.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <KeySquare className="shrink-0" />
                    <p className="-mt-0.5">
                      Attrezzature moderne e procedure sicure per garantire
                      interventi rapidi ed efficaci.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
  
            {/* Media 3 Desktop */}
            <div className="hidden md:block bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden aspect-[2/1]">
              <img src="mechanic_portrait.webp" alt="Meccanico al lavoro" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  