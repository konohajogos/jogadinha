import Image from "next/image"
import { BadgeCheck, Gift, AlertTriangle, Sparkles } from "lucide-react"

export function ExclusiveBenefitSection() {
  return (
    <section
      className="px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #0c1476, #0a1a4a)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#ffff00]/30 bg-[#ffff00]/5 p-8 sm:p-12">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, hsl(60 100% 50% / 0.6), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ backgroundColor: "rgba(255,255,0,0.15)" }}>
              <AlertTriangle className="h-4 w-4" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: "#ffff00" }}>
                Vagas limitadas
              </span>
            </div>

            <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              {"Beneficio para os "}
              <span style={{ color: "#ffff00" }}>50 primeiros</span>
            </h2>

            {/* Credential image */}
            <div className="relative my-8 h-64 w-64 sm:h-80 sm:w-80">
              <Image
                src="/images/cordao-broche.png"
                alt="Cordao e broche exclusivo Konoha Jogos - Jogadinha Nerd"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div className="w-full space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-[#ffff00]/20 bg-[#ffff00]/10 p-4 text-left">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#ffff00" }} />
                <span className="text-base font-medium text-white">
                  Credencial personalizada exclusiva da edicao Orgulho Nerd
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-[#25D366]/20 bg-[#25D366]/10 p-4 text-left">
                <Gift className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#25D366" }} />
                <span className="text-base font-medium text-white">
                  Brinde especial entregue na entrada
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" style={{ color: "#ffff00" }} />
              <span>Garanta seu ingresso antes que os 50 primeiros acabem!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
