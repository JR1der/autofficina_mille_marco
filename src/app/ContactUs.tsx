"use client";

import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      id="contact-us"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16"
    >
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <b className="text-muted-foreground uppercase font-semibold text-sm">
          Contattaci
        </b>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tighter">
          Ci piacerebbe ricevere tue notizie
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Il nostro team cordiale è sempre disponibile per aiutarti.
        </p>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Email</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Il nostro team è qui per aiutarti.
            </p>
            <Link
              className="font-medium"
              href="mailto:akashmoradiya3444@gmail.com"
            >
              email@gmail.com
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-8 font-bold text-xl">WhatsApp</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Contatta il nostro team direttamente su WhatsApp.
            </p>
            <Link
              className="text-center inline-block bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 w-full"
              href="https://wa.me/397751520501"
              target="_blank"
            >
              Invia un messaggio
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Ufficio</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Vieni a trovarci nella nostra sede.
            </p>
            <Link
              className="font-medium"
              href="https://map.google.com"
              target="_blank"
            >
              Via Merago, 23 <br /> 03010 SERRONE (Fr)
            </Link>
          </div>
          <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-8 font-bold text-xl">Telefono</h3>
            <p className="mt-2.5 mb-4 text-muted-foreground">
              Lun-Sab dalle 9:00 alle 19:00
            </p>
            <Link className="font-medium" href="tel:397751520501">
              +39-775-152-0501
            </Link>
          </div>
        </div>
        <div className="mt-16 w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.436300283082!2d13.098211!3d41.8306422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f8bc7744fa8cb%3A0xb887d5636e8c9e11!2sAutofficina%20Mille%20Marco!5e1!3m2!1suk!2sit!4v1759263971107!5m2!1suk!2sit"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
