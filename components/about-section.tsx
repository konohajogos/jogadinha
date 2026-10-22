import { D20Icon } from "./game-icons"

export function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#13091d] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[center_35%] opacity-75 lg:left-[42%] lg:bg-center lg:opacity-100"
        style={{ backgroundImage: "url('/images/halloween-bg-primary.png')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#13091d] via-[#13091d]/95 to-[#13091d]/65 lg:via-[#13091d]/90 lg:to-[#13091d]/15"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 text-[#ffb438]">
            <D20Icon className="h-6 w-6" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
              A experiência
            </span>
          </div>

          <h2 className="text-balance font-display text-4xl font-bold leading-tight text-[#fff7e8] sm:text-5xl lg:text-6xl">
            Não é só sobre jogar. <span className="text-[#ffb438]">É sobre fazer parte.</span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-[#fff7e8]/85 sm:text-lg">
            <p>
              Conheça um jogo novo, desafie seus amigos e encontre pessoas que curtem as mesmas coisas que você.
              Essa é a proposta da Jogadinha Nerd.
            </p>
            <p>
              Um evento presencial criado pela Konoha Jogos para reunir apaixonados por jogos de tabuleiro,
              card games, RPG e cultura geek em uma experiência de interação, competição e diversão.
            </p>
            <p className="font-display font-semibold text-[#ffb438]">
              Nesta edição, o clima é de Halloween. Prepare sua estratégia e escolha seu desafio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
