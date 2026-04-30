import { D20Icon } from "./game-icons"

export function AboutSection() {
  return (
    <section
      className="relative px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #0a1a4a, #0c1476)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2" style={{ color: "#ffff00" }}>
          <D20Icon className="h-6 w-6" />
          <span className="font-display text-sm font-semibold uppercase tracking-widest">
            Sobre o Evento
          </span>
        </div>

        <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {"O que \u00E9 a "}
          <span style={{ color: "#ffff00" }}>Jogadinha Nerd</span>?
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/70">
          <p>
            A Jogadinha Nerd e um evento presencial dedicado aos apaixonados por jogos de tabuleiro, RPG e cultura geek.
          </p>
          <p>
            {"Nesta "}
            <span className="font-bold" style={{ color: "#ffff00" }}>SEGUNDA</span>
            {" edicao, estamos preparando a experiencia com um toque a mais de nerd pela Konoha."}
          </p>
          <div className="mx-auto max-w-lg rounded-xl border border-[#ffff00]/30 bg-[#ffff00]/10 p-6">
            <p className="font-display text-base italic text-white sm:text-lg">
              Se voce ja viveu uma Jogadinha, sabe.
            </p>
            <p className="mt-2 font-display text-base font-bold sm:text-lg" style={{ color: "#ffff00" }}>
              Se nunca viveu, essa e a edicao perfeita para comecar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
