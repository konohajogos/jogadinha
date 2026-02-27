import { CalendarDays, Clock, MapPin, Flame } from "lucide-react"
import { CTAButtons } from "./cta-buttons"

export function FinalCTASection() {
  return (
    <section
      className="relative px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #0113b2, #000000)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-8 text-center sm:p-12">
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            {"Garante seu lugar na mesa!"}
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-base text-white">
              <CalendarDays className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-semibold">21/03/2026</span>
            </div>
            <div className="flex items-center gap-2 text-base text-white">
              <Clock className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-semibold">{"13h \u00E0s 22h"}</span>
            </div>
            <div className="flex items-center gap-2 text-base text-white">
              <MapPin className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display font-semibold">UNEMAT</span>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3" style={{ backgroundColor: "rgba(255,255,0,0.1)" }}>
            <Flame className="h-5 w-5 text-secondary" />
            <span className="font-display text-lg font-bold text-white">
              {"1\u00BA Lote \u2013 "}
            </span>
            <span className="font-display text-2xl font-extrabold" style={{ color: "#ffff00" }}>
              R$ 30,00
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
