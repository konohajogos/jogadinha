import { Check } from "lucide-react"

const audiences = [
  "Para quem ama jogos de tabuleiro",
  "Para quem quer aprender Magic",
  "Para colecionadores de Pokémon",
  "Para fãs de RPG",
  "Para quem quer conhecer pessoas com os mesmos interesses",
  "Para quem quer viver um sábado diferente",
]

export function AudienceSection() {
  return (
    <section
      className="px-4 py-20 sm:py-28"
      style={{ backgroundColor: "#0c1476" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest" style={{ color: "#ffff00" }}>
            {"P\u00FAblico"}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {"Para quem \u00E9 o evento"}
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {audiences.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-[#ffff00]/30"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,0,0.15)" }}>
                <Check className="h-4 w-4" style={{ color: "#ffff00" }} />
              </div>
              <span className="text-base text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
