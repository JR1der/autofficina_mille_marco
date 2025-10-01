"use client";

import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(
      ".contact-title, .contact-subtitle, .contact-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            if (index === -1) setTitleVisible(true);
            else if (!visibleIndexes.includes(index)) {
              setVisibleIndexes((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el, idx) => {
      el.setAttribute("data-index", idx === 0 ? "-1" : idx.toString());
      observer.observe(el);
    });

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, [visibleIndexes]);

  return (
    <section
      id="contact-us"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16"
    >
      <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        <b
          className={`contact-title text-muted-foreground uppercase font-semibold text-sm transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Contattaci
        </b>
        <h2
          className={`contact-subtitle mt-3 text-3xl md:text-4xl font-semibold tracking-tighter transition-all duration-700 delay-150 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Ci piacerebbe ricevere tue notizie
        </h2>
        <p
          className={`mt-4 text-base sm:text-lg text-muted-foreground transition-all duration-700 delay-200 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Il nostro team cordiale è sempre disponibile per aiutarti.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              icon: MailIcon,
              title: "Email",
              description: "Il nostro team è qui per aiutarti.",
              link: "mailto:marcomille@yahoo.it",
              linkText: "marcomille@yahoo.it",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              description: "Contatta il nostro team direttamente su WhatsApp.",
              link: "https://wa.me/397751520501",
              linkText: "Invia un messaggio",
              isButton: true,
            },
            {
              icon: MapPinIcon,
              title: "Ufficio",
              description: "Vieni a trovarci nella nostra sede.",
              link: "https://map.google.com",
              linkText: "Via Merago, 23 <br /> 03010 SERRONE (Fr)",
            },
            {
              icon: PhoneIcon,
              title: "Telefono",
              description: "Lun-Sab dalle 9:00 alle 19:00",
              link: "tel:397751520501",
              linkText: "+39-775-152-0501",
            },
          ].map((item, index) => {
            const isVisible = visibleIndexes.includes(index + 1);
            return (
              <div
                key={index}
                className={`contact-card border border-dashed bg-primary/1 p-6 pb-10 rounded-lg transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
                  <item.icon />
                </div>
                <h3 className="mt-8 font-bold text-xl">{item.title}</h3>
                <p className="mt-2.5 mb-4 text-muted-foreground">
                  {item.description}
                </p>
                {item.isButton ? (
                  <Link
                    className="text-center inline-block bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 w-full"
                    href={item.link}
                    target="_blank"
                  >
                    {item.linkText}
                  </Link>
                ) : (
                  <Link
                    className="font-medium"
                    href={item.link}
                    target="_blank"
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.linkText }} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 w-full h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-400 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
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
