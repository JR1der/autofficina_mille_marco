"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowUpRight, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BackgroundPattern from "./BackgroundPattern";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <BackgroundPattern className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className={`cursor-pointer bg-berkley-blue hover:bg-light-blue text-light-grey rounded-full py-1 border-border transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          asChild
        >
          <Link href="https://maps.app.goo.gl/xPH91GBvj35njr7r6">
            Trova noi su Google Maps <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>

        <h1
          className={`text-light-grey mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Autofficina <br />
          Mille Motors
        </h1>

        <p
          className={`text-light-grey mt-6 md:text-lg transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Affidabilità e professionalità per la tua auto
          <br />
          Prenota subito un appuntamento
        </p>

        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Button
            size="lg"
            className="cursor-pointer text-light-grey bg-green-600 hover:bg-green-400 rounded-full"
          >
            WhatsApp <MessageCircleMore className="h-5! w-5!" />
          </Button>
          <Button
            onClick={scrollToSection("about-us")}
            variant="outline"
            size="lg"
            className="cursor-pointer bg-berkley-blue hover:bg-light-blue text-light-grey rounded-full text-base shadow-none"
          >
            <ArrowBigDown className="h-5! w-5!" /> Comincia
          </Button>
        </div>
      </div>
    </section>
  );
}
