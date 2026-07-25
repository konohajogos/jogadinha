import Image from "next/image"
import { CalendarDays, Clock, MapPin, Flame } from "lucide-react"
import { CTAButtons } from "./cta-buttons"

export function FinalCTASection() {
  return (
    <section className="relative px-4 py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-nerd.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1a4a]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-[#ffff00]/30 bg-[#0a1a4a]/80 p-8 text-center sm:p-12 backdrop-blur-sm">
          <h2 className="text-balance font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {"Se voc\u00EA gosta de ser nerd ou de jogos, voc\u00EA precisa estar aqui."}
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-base text-white">
              <CalendarDays className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-bold">15/08/2026</span>
            </div>
            <div className="flex items-center gap-2 text-base text-white">
              <Clock className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-bold">{"15h \u00E0s 23h"}</span>
            </div>
            <div className="flex items-center gap-2 text-base text-white">
              <MapPin className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-bold">Grambeer</span>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-xl px-6 py-4" style={{ backgroundColor: "#ffff00" }}>
            <Flame className="h-6 w-6 text-black" />
            <span className="font-display text-xl font-bold text-black">
              {"3\u00BA Lote"}
            </span>
            <span className="mx-1 h-6 w-px bg-black/30" aria-hidden="true" />
            <span className="font-display text-3xl font-extrabold text-black">
              R$ 45,00
            </span>
          </div>

          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  )
}
