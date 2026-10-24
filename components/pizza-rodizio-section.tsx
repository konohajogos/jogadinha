import Image from "next/image"

export function PizzaRodizioSection() {
  return (
    <section className="bg-[#13091d] px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="rodizio-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[480px] overflow-hidden rounded-2xl md:order-last">
          <Image
            src="/images/pizza-boardgames.jpg"
            alt="Duas pizzas sobre uma mesa com cartas e dados de jogos."
            fill
            sizes="(min-width: 768px) 480px, calc(100vw - 32px)"
            className="object-cover object-center"
          />
        </div>

        <div className="order-first">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
            Uma pausa saborosa
          </p>
          <h2 id="rodizio-heading" className="mt-5 max-w-xl text-balance font-display text-4xl font-extrabold leading-tight text-[#fff4df] sm:text-5xl">
            Jogos à mesa. Pizza também.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f8e9d5]/85">
            Na Pizzaria Grand Beer, participantes da Jogadinha Nerd pagam <strong className="font-bold text-[#fff4df]">R$ 59,90 pelo rodízio de pizzas e massas</strong>.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f8e9d5]/75">
            O rodízio é uma oferta da pizzaria para participantes, com pagamento separado do ingresso do evento.
          </p>
        </div>
      </div>
    </section>
  )
}
