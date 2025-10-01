"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

interface BackgroundPatternProps {
  className?: string;
}

export default function BackgroundPattern({
  className,
}: BackgroundPatternProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs"
        style={{
          backgroundImage: "url('/garage_bmw.jpeg')",
        }}
      >
        {/* Optional overlay tint */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Dotted pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_35%,black_50%)]",
          "fill-light-grey"
        )}
      />

      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color="#2d8fff"
        refresh
      />
    </div>
  );
}
