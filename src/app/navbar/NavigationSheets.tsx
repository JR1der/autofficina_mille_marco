"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./NavMenu";

interface NavigationSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (sectionId: string) => (e: React.MouseEvent) => void;
}

export function NavigationSheet({
  isOpen,
  onOpenChange,
  onNavigate,
}: NavigationSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-4">
        <SheetTitle className="sr-only">Main navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Open the menu to navigate to different sections of the page
        </SheetDescription>
        <NavMenu orientation="vertical" onNavigate={onNavigate} />
      </SheetContent>
    </Sheet>
  );
}
