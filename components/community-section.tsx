import { MeepleIcon } from "./game-icons"

export function CommunitySection() {
  return (
    <section
      className="relative px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #000000, #0113b2)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <MeepleIcon className="mx-auto mb-6 h-12 w-12 text-[#ffff00]/40" />

        <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {"Experi\u00EAncia "}
          <span style={{ color: "#ffff00" }}>Presencial</span>
        </h2>

        <div className="mt-8 space-y-4 text-xl leading-relaxed text-white/70 sm:text-2xl">
          <p>
            {"Mais do que um evento, a Jogadinha Nerd \u00E9 uma "}
            <span className="font-semibold text-white">comunidade.</span>
          </p>
          <p>
            {"Aqui voc\u00EA n\u00E3o joga sozinho."}
          </p>
          <p className="font-display font-bold" style={{ color: "#ffff00" }}>
            {"Voc\u00EA faz parte da mesa."}
          </p>
        </div>
      </div>
    </section>
  )
}
