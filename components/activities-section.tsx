import {
  Swords,
  Trophy,
  Crown,
  Gift,
  Handshake,
  Gamepad2,
  type LucideIcon,
} from "lucide-react"
import { PokemonIcon, YuGiOhIcon } from "./game-icons"

interface Activity {
  icon: LucideIcon | React.FC<{ className?: string }>
  title: string
  description: string
  color: string
  borderColor: string
  bgColor: string
}

const activities: Activity[] = [
  {
    icon: Swords,
    title: "RPG",
    description: "Mesas conduzidas por mestres experientes",
    color: "text-[#ffff00]",
    borderColor: "border-[#ffff00]/30",
    bgColor: "bg-[#ffff00]/10",
  },
  {
    icon: YuGiOhIcon,
    title: "Torneio de Yu-Gi-Oh!",
    description: "Prepare seu deck e venha competir em mesa",
    color: "text-[#0097FF]",
    borderColor: "border-[#0097FF]/30",
    bgColor: "bg-[#0097FF]/10",
  },
  {
    icon: Gamepad2,
    title: "Missões e Dinâmicas",
    description: "Desafios do universo Nerd",
    color: "text-[#25D366]",
    borderColor: "border-[#25D366]/30",
    bgColor: "bg-[#25D366]/10",
  },
  {
    icon: PokemonIcon,
    title: "Troca de Cartas Pokémon",
    description: "Espaço dedicado para troca e interação",
    color: "text-[#ffff00]",
    borderColor: "border-[#ffff00]/30",
    bgColor: "bg-[#ffff00]/10",
  },
  {
    icon: Trophy,
    title: "Torneio de Board Games",
    description: "Competições com premiação",
    color: "text-[#0097FF]",
    borderColor: "border-[#0097FF]/30",
    bgColor: "bg-[#0097FF]/10",
  },
  {
    icon: Crown,
    title: "Torneio dos Campeões",
    description: "Campeões das mesas se enfrentam em uma rodada final",
    color: "text-[#25D366]",
    borderColor: "border-[#25D366]/30",
    bgColor: "bg-[#25D366]/10",
  },
  {
    icon: Gift,
    title: "Sorteios",
    description: "Prêmios durante todo o evento",
    color: "text-[#ffff00]",
    borderColor: "border-[#ffff00]/30",
    bgColor: "bg-[#ffff00]/10",
  },
  {
    icon: Handshake,
    title: "Parceiros Especiais",
    description: "Participação de parceiros convidados",
    color: "text-[#0097FF]",
    borderColor: "border-[#0097FF]/30",
    bgColor: "bg-[#0097FF]/10",
  },
]

export function ActivitiesSection() {
  return (
    <section
      className="relative px-4 py-20 sm:py-28"
      style={{ backgroundColor: "#0c1476" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest" style={{ color: "#ffff00" }}>
            {"Programa\u00E7\u00E3o"}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {"O que voc\u00EA vai encontrar"}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className={`group relative overflow-hidden rounded-xl border ${activity.borderColor} bg-white/5 p-6 transition-all hover:scale-[1.02] hover:border-opacity-60`}
            >
              <div className={`mb-4 inline-flex rounded-lg p-2.5 ${activity.bgColor}`}>
                <activity.icon className={`h-6 w-6 ${activity.color}`} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {activity.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
