"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentProps } from "react";

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  onNavigate: (sectionId: string) => (e: React.MouseEvent) => void;
}

export const NavMenu = ({ onNavigate, ...props }: NavMenuProps) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-3 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#about-us" onClick={onNavigate("about-us")}>
              Chi Siamo
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#services" onClick={onNavigate("services")}>
              Servizi
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#testimonials" onClick={onNavigate("testimonials")}>
              Testimonianze
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="#contact-us" onClick={onNavigate("contact-us")}>
              Contatti
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
