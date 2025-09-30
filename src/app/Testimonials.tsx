import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sara Trippini",
    testimonial:
      "Professionali, rapidi e onesti. sempre gentili e disponibili, mi hanno sempre risolto ogni problema. Cinque stelle meritatissime",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Simone Proietto",
    testimonial:
      "Ottima autofficina con personale competente in particolare il proprietario Marco e' davvero un ottima persona alla mano ed amichevole.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Roberto Pietrangeli",
    testimonial:
      "Ottima officina riparazioni con titolare e personale competente e disponibile a risolvere qualsiasi problema.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "VIVI E LASCIA VIVERE",
    testimonial:
      "Veloce nelle riparazioni,personale gentile e preparato ottimo anche per lavaggio motore automobili.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Aldo Fulli",
    testimonial: "Bravo, esperto e onesto.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Mario Lauria",
    testimonial: "Competente e bravo",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-6">
      <div>
        <h2 className="text-5xl font-semibold text-center tracking-[-0.03em]">
          Amati dai Nostri Clienti
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-xl">
          Scopri cosa dicono le persone che hanno scelto la nostra officina
        </p>
        <div className="mt-8 sm:mt-14 w-full max-w-(--breakpoint-xl) mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden border-r border-background">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col outline-solid outline-1 outline-border px-6 py-8"
              >
                <div className="flex items-center justify-center gap-2">
                  <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                  <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                  <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                  <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                  <StarIcon className="w-6 h-6 fill-yellow-500 stroke-yellow-500" />
                </div>
                <p className="my-6 text-[17px] text-center max-w-md">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="mt-auto flex items-center justify-center gap-3">
                  <Avatar className="size-9">
                    <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
