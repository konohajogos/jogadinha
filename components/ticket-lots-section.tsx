import { AlertTriangle, BadgeCheck, Clock3, Gift } from "lucide-react"

const ticketLots = [
  {
    name: "1º Lote",
    status: "Esgotado",
    until: "até 08/05",
    price: "R$ 35",
    featured: false,
    benefits: ["Credenciais Exclusivas (50 primeiros)", "Brinde de Boas Vindas"],
  },
  {
    name: "2º Lote",
    status: "Atual",
    until: "até 16/05",
    price: "R$ 40",
    featured: true,
    benefits: ["Brinde de Boas Vindas"],
  },
  {
    name: "3º Lote",
    status: "Em breve",
    until: "até 23/05",
    price: "R$ 45",
    featured: false,
    benefits: ["Brinde de Boas Vindas"],
  },
]

export function TicketLotsSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #030619 0%, #07106a 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,151,255,0.26),_transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffff00]/25 bg-[#ffff00]/10 px-4 py-1.5">
            <AlertTriangle className="h-4 w-4" style={{ color: "#ffff00" }} />
            <span className="font-display text-xs font-bold uppercase tracking-wider" style={{ color: "#ffff00" }}>
              Credenciais limitadas
            </span>
          </div>

          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Garanta sua <span style={{ color: "#ffff00" }}>credencial personalizada + brinde</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ticketLots.map((lot) => (
            <article
              key={lot.name}
              className={[
                "relative min-h-[220px] overflow-hidden rounded-2xl border p-6 shadow-2xl backdrop-blur-sm",
                lot.featured
                  ? "border-[#ffff00] bg-[#171c55]/90 shadow-[#ffff00]/10"
                  : "border-white/10 bg-[#111844]/60 opacity-80",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute right-0 top-0 rounded-bl-xl px-4 py-2 font-display text-xs font-bold uppercase",
                  lot.featured ? "bg-[#ffff00] text-[#050813]" : "bg-[#8b2548] text-white/80",
                ].join(" ")}
              >
                {lot.status}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-white/55">
                <Clock3 className="h-4 w-4" />
                <span>{lot.until}</span>
              </div>

              <div className="mt-5 font-display text-3xl font-extrabold" style={{ color: lot.featured ? "#ffff00" : "#ffffff" }}>
                {lot.price}
              </div>

              {lot.featured && (
                <div className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/70">
                  Últimas credenciais personalizadas
                </div>
              )}

              <ul className="mt-6 space-y-3">
                {lot.benefits.map((benefit) => {
                  const Icon = benefit.startsWith("Credenciais") ? BadgeCheck : Gift

                  return (
                    <li key={benefit} className="flex items-start gap-2 text-sm font-semibold text-white/80">
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: benefit.startsWith("Credenciais") ? "#ffff00" : "#25D366" }}
                      />
                      <span>{benefit}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
