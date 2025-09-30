import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowUpRight, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import BackgroundPattern from "./BackgroundPattern";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="bg-berkley-blue hover:bg-light-blue text-light-grey rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Google Maps Location <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="text-light-grey mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Autofficina <br />
          Mille Motors
        </h1>
        <p className="text-light-grey mt-6 md:text-lg">
          Affidabilità e professionalità per la tua auto
          <br />
          Prenota subito un appuntamento
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-light-grey bg-berkley-blue hover:bg-light-blue rounded-full"
          >
            WhatsApp <MessageCircleMore className="h-5! w-5!" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-light-grey rounded-full text-base shadow-none"
          >
            <ArrowBigDown className="h-5! w-5!" /> Comincia
          </Button>
        </div>
      </div>
    </div>
  );
}
