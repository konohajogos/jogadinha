const audiences = [
  "Quem ama jogos de tabuleiro e quer conhecer títulos novos",
  "Quem joga Pokémon TCG ou Yu-Gi-Oh! e quer encontrar outros jogadores",
  "Quem gosta de RPG, fantasia e aventuras",
  "Quem adora competir, testar estratégias e enfrentar desafios",
  "Quem curte Halloween e quer viver um programa diferente",
  "Quem quer conhecer pessoas com interesses em comum",
  "Quem já participa da comunidade Konoha e quer reencontrar a galera",
]

export function AudienceSection() {
  return (
    <section className="bg-[#100719] px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
          Seu lugar na mesa
        </p>
        <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-tight text-[#fff4df] sm:text-5xl">
          Para quem é a Jogadinha Nerd?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#f8e9d5]/85">
          Se você se identifica com alguma dessas opções, tem lugar para você na mesa.
        </p>

        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {audiences.map((item, index) => (
            <li key={item} className="flex gap-4 border-t border-[#f8e9d5]/20 py-5">
              <span className="font-display text-sm font-bold text-[#ff9f45]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-relaxed text-[#fff4df] sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-lg font-semibold leading-relaxed text-[#ffbd76]">
          Você não precisa conhecer todos os jogos, ser experiente ou chegar acompanhado. Só precisa ter vontade de participar. O resto a gente descobre junto!
        </p>
      </div>
    </section>
  )
}
