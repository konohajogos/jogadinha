import Image from "next/image"
import { BadgeCheck, Gift, AlertTriangle, Clock, CheckCircle2 } from "lucide-react"

export function ExclusiveBenefitSection() {
  return (
    <section
      className="px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #000000, #0113b2)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ backgroundColor: "rgba(255,255,0,0.15)" }}>
            <AlertTriangle className="h-4 w-4" style={{ color: "#ffff00" }} />
            <span className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: "#ffff00" }}>
              Credenciais Limitadas
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
            Garanta sua{" "}
            <span style={{ color: "#ffff00" }}>credencial personalizada + brinde</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Batch 1 - Sold Out */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 opacity-60">
            <div className="absolute top-0 right-0 rounded-bl-xl bg-red-500/80 px-3 py-1">
              <span className="text-xs font-bold text-white">ESGOTADO</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-white/60" />
              <span className="text-sm text-white/60">Até 07/03</span>
            </div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-white">R$ 30</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-sm text-white/80">Credenciais exclusivas</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-400" />
                <span className="text-sm text-white/80">Brinde especial</span>
              </div>
            </div>
          </div>

          {/* Batch 2 - Current / Highlighted */}
          <div className="relative overflow-hidden rounded-2xl border-2 bg-white/10 p-6" style={{ borderColor: "#ffff00", boxShadow: "0 0 30px rgba(255,255,0,0.2)" }}>
            <div className="absolute top-0 right-0 rounded-bl-xl" style={{ backgroundColor: "#ffff00" }}>
              <span className="px-3 py-1 text-xs font-bold text-black">ATUAL</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" style={{ color: "#ffff00" }} />
              <span className="text-sm font-medium text-white">Até 14/03</span>
            </div>
            <div className="mb-4">
              <span className="font-display text-3xl font-bold" style={{ color: "#ffff00" }}>R$ 35</span>
            </div>
            <div className="mb-4 rounded-lg bg-white/10 p-3">
              <p className="text-xs text-white/70">
                Foram liberadas mais 20 credenciais
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4" style={{ color: "#ffff00" }} />
                <span className="text-sm font-medium text-white">Credenciais</span>
              </div>
              <div className="flex items-start gap-2">
                <Gift className="mt-0.5 h-4 w-4" style={{ color: "#25D366" }} />
                <span className="text-sm font-medium text-white">Brinde especial</span>
              </div>
            </div>
          </div>

          {/* Batch 3 - Future / Disabled */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 opacity-50">
            <div className="absolute top-0 right-0 rounded-bl-xl bg-white/10 px-3 py-1">
              <span className="text-xs font-bold text-white/60">EM BREVE</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-white/40" />
              <span className="text-sm text-white/40">Até 21/03</span>
            </div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-white/60">R$ 40</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-white/40">Em breve</p>
            </div>
          </div>
        </div>

        {/* Credential image */}
        <div className="relative mx-auto mt-12 h-48 w-48 sm:h-64 sm:w-64">
          <Image
            src="/images/cordao-broche.png"
            alt="Cordão e broche exclusivo Konoha Jogos - Jogadinha Nerd"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
