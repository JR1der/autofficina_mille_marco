"use client";

import { Separator } from "@/components/ui/separator";
import { AtSign, MapPin, MessageCircleMore, PhoneIcon } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "#hero", sectionId: "hero" },
  { title: "Chi Siamo", href: "#about-us", sectionId: "about-us" },
  { title: "Servizi", href: "#services", sectionId: "services" },
  { title: "Testimonianze", href: "#testimonials", sectionId: "testimonials" },
  { title: "Contatti", href: "#contact-us", sectionId: "contact-us" },
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className="flex flex-col mt-10">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <img id="logo-7" width="64rem" src="/logo.png" />

            {/* Navigation links */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  {link.sectionId ? (
                    <Link
                      href={link.href}
                      onClick={scrollToSection(link.sectionId)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-x-2 gap-y-5 px-6 xl:px-0">
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="tel:+39" target="_blank">
                <PhoneIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://maps.app.goo.gl/xPH91GBvj35njr7r6"
                target="_blank"
              >
                <MapPin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <MessageCircleMore className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <AtSign className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
