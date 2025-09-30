import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavigationSheet } from "./NavigationSheets";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
  return (
    <nav className="h-16 bg-background border-b w-full">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/logo.png" alt="Agg Logo" width={50} height={50} />
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-berkley-blue hover:bg-light-blue hidden sm:inline-flex">
            Comincia
          </Button>
          <Button>WhatsApp</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
