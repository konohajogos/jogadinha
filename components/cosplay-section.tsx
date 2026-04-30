import { Sparkles, Star } from "lucide-react"

export function CosplaySection() {
  return (
    <section
      className="relative px-4 py-16 sm:py-20"
      style={{ backgroundColor: "#0c1476" }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          className="relative overflow-hidden rounded-2xl border-2 border-[#ffff00] p-8 text-center sm:p-12"
          style={{ backgroundColor: "rgba(255, 255, 0, 0.1)" }}
        >
          {/* Decorative stars */}
          <Star
            className="absolute top-4 left-4 h-6 w-6 text-[#ffff00]/30"
            fill="currentColor"
          />
          <Star
            className="absolute bottom-4 right-4 h-8 w-8 text-[#ffff00]/30"
            fill="currentColor"
          />
          <Star
            className="absolute top-6 right-8 h-4 w-4 text-[#ffff00]/20"
            fill="currentColor"
          />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <Sparkles className="h-10 w-10 text-[#ffff00]" />
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl lg:text-5xl" style={{ color: "#ffff00" }}>
              {"Cosplay \u00E9 bem-vindo!"}
            </h2>
            <p className="max-w-md text-lg text-white/80">
              Vista-se do seu personagem favorito e venha brilhar no evento
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
