import {
  Gamepad2,
  Ghost,
  Gift,
  Handshake,
  Swords,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { PokemonIcon, YuGiOhIcon } from "./game-icons"

interface Activity {
  icon: LucideIcon | React.FC<{ className?: string }>
  title: string
  description: string
}

const activities: Activity[] = [
  {
    icon: Gamepad2,
    title: "Jogos de tabuleiro",
    description: "Explore diferentes jogos, sente-se à mesa e descubra seu próximo favorito.",
  },
  {
    icon: PokemonIcon,
    title: "Torneio de Pokémon TCG",
    description: "Atividade recreativa e independente para a comunidade, sem caráter oficial da Liga Pokémon.",
  },
  {
    icon: YuGiOhIcon,
    title: "Yu-Gi-Oh!",
    description: "Prepare seu deck, encontre outros duelistas e aproveite as partidas do evento.",
  },
  {
    icon: Swords,
    title: "RPG",
    description: "Entre em uma aventura de interpretação, imaginação e decisões.",
  },
  {
    icon: Ghost,
    title: "Desafios temáticos",
    description: "Entre no clima de Halloween com missões, surpresas e desafios especiais.",
  },
  {
    icon: Gift,
    title: "Doces ou Travessuras",
    description: "Uma recompensa ou um desafio? Só participando para descobrir.",
  },
  {
    icon: Trophy,
    title: "Torneios e premiações",
    description: "Teste suas habilidades, dispute partidas e concorra a lembranças especiais.",
  },
  {
    icon: Handshake,
    title: "Parceiros e comunidade geek",
    description: "Conheça os parceiros presentes e as novidades preparadas pela comunidade.",
  },
]

export function ActivitiesSection() {
  return (
    <section className="bg-[#1a0d27] px-5 py-24 text-[#fff7e8] sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb438]">
            A programação
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            Escolha seu desafio
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#fff7e8]/75">
            O que espera por você nesta noite de Halloween? Os torneios de Pokémon TCG e Yu-Gi-Oh! estão inclusos no ingresso.
          </p>
        </div>

        <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:gap-x-20">
          {activities.map((activity, index) => (
            <div key={activity.title} className="group flex gap-5 border-t border-[#fff7e8]/20 py-6 sm:py-8">
              <span className="pt-1 font-display text-sm font-semibold text-[#ff7a2f]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <activity.icon className="mb-4 h-7 w-7 text-[#ffb438] transition-transform duration-200 group-hover:-translate-y-1" />
                <h3 className="font-display text-xl font-bold sm:text-2xl">{activity.title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#fff7e8]/70">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
