import { ChevronDown } from "lucide-react"

const questions = [
  {
    question: "Preciso saber jogar para participar?",
    answer: "Não! A Jogadinha é uma oportunidade para conhecer jogos novos e aprender com outros participantes. Você também pode escolher as atividades que mais combinam com você.",
  },
  {
    question: "Posso ir sozinho?",
    answer: "Sim! O evento é uma oportunidade para conhecer pessoas com interesses em comum e encontrar novos parceiros de jogo.",
  },
  {
    question: "Preciso ir fantasiado?",
    answer: "Não. A fantasia é opcional. Se quiser entrar no clima de Halloween, venha com seu personagem favorito e participe do desfile de fantasias com premiação.",
  },
  {
    question: "O ingresso inclui o torneio de Pokémon TCG?",
    answer: "Sim. Os torneios de Pokémon TCG e Yu-Gi-Oh! estão inclusos no ingresso, assim como o acesso às outras atrações disponíveis durante o evento.",
  },
  {
    question: "O torneio de Pokémon TCG é oficial?",
    answer: "Não. É uma atividade recreativa e independente, voltada à interação entre jogadores, sem caráter de torneio oficial da Liga Pokémon. Haverá um juiz credenciado pela Liga e brindes para quem chegar à final.",
  },
  {
    question: "O que está incluído no ingresso geral?",
    answer: "O ingresso dá acesso ao evento e às atividades disponíveis. O kit com credencial personalizada, crachá e brinde de participação é exclusivo dos primeiros 50 ingressos.",
  },
  {
    question: "Posso participar de todas as atividades?",
    answer: "Você poderá aproveitar as atividades disponíveis durante o evento, respeitando os horários, as regras e a capacidade de cada atração.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-[#13091d] px-4 py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
          Antes de chegar
        </p>
        <h2 id="faq-heading" className="mt-5 text-balance font-display text-4xl font-extrabold text-[#fff4df] sm:text-5xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-10 border-t border-[#f8e9d5]/25">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-[#f8e9d5]/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-display text-lg font-semibold text-[#fff4df] marker:hidden hover:text-[#ffbd76] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9f45] [&::-webkit-details-marker]:hidden sm:text-xl">
                <span>{question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#ff9f45] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-relaxed text-[#f8e9d5]/85 sm:text-lg">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
