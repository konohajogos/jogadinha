import { D20Icon } from "./game-icons"

export function AboutSection() {
  return (
    <section
      className="relative px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #000000, #0113b2)" }}
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
            {"A Jogadinha Nerd \u00E9 um evento presencial dedicado aos apaixonados por jogos de tabuleiro, RPG e cultura geek."}
          </p>
          <p>
            {"Nesta edi\u00E7\u00E3o especial de 1 ano, estamos preparando a "}
            <span className="font-semibold text-white">
              {"maior experi\u00EAncia j\u00E1 realizada pela Konoha."}
            </span>
          </p>
          <div className="mx-auto max-w-lg rounded-xl border border-white/20 bg-white/5 p-6">
            <p className="font-display text-base italic text-white sm:text-lg">
              {"Se voc\u00EA j\u00E1 viveu uma Jogadinha, sabe."}
            </p>
            <p className="mt-2 font-display text-base font-bold sm:text-lg" style={{ color: "#ffff00" }}>
              {"Se nunca viveu, essa \u00E9 a edi\u00E7\u00E3o perfeita para come\u00E7ar."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
