"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavigationSheet } from "./NavigationSheets";
import { NavMenu } from "./NavMenu";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu state

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsVisible(false); // instantly hide navbar
    setIsMenuOpen(false); // close mobile sheet
  };

  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${sectionId}`);
    }
    closeMenu(); // close everything when navigating
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-background"
      )}
    >
      <div className="h-16 flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8 border-b">
        <Image src="/logo.png" alt="Agg Logo" width={50} height={50} />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" onNavigate={scrollToSection} />

        <div className="flex items-center gap-3">
          <Button
            onClick={scrollToSection("about-us")}
            variant="outline"
            className="cursor-pointer bg-berkley-blue hover:bg-light-blue hidden sm:inline-flex"
          >
            Comincia
          </Button>
          <Button className="bg-green-600 text-white hover:bg-green-400 transition">
            WhatsApp
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet
              isOpen={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              onNavigate={(sectionId) => (e) => {
                scrollToSection(sectionId)(e);
                setIsMenuOpen(false); // close the sheet instantly
                setIsVisible(false); // hide navbar instantly
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
