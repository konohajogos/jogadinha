import Image from "next/image"
import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react"
import { event } from "@/lib/event"
import { CTAButtons } from "./cta-buttons"
import { CountdownTimer } from "./countdown-timer"

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#13091f] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:pt-24">
      <Image src="/images/halloween-bg-secondary.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d0718]/95 via-[#160922]/90 to-[#13071e]/40 lg:to-[#13071e]/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#170921] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-8">
        <div className="relative z-10 max-w-2xl">
          <Image src="/images/halloween-logo.png" alt={event.name} width={530} height={354} priority className="mb-2 w-[min(88vw,390px)] drop-shadow-[0_15px_35px_rgba(0,0,0,.6)] sm:w-[430px] lg:w-[500px]" />
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffb02e] sm:text-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> O Halloween de Rondonópolis
          </p>
          <h1 className="max-w-xl font-display text-3xl font-black leading-[1.08] tracking-tight text-[#fff7e9] sm:text-5xl lg:text-[3.3rem]">
            Vai ser diferente. <span className="text-[#ff9b21]">Você tem coragem de participar?</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#fff7e9]/90 sm:text-lg">
            Prepare-se para 8 horas de jogos, torneios, desafios e experiências geek em uma edição especial da Jogadinha Nerd.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm font-semibold text-[#fff7e9] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-base">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 shrink-0 text-[#ffb02e]" aria-hidden="true" />{event.date} · {event.day}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="h-5 w-5 shrink-0 text-[#ffb02e]" aria-hidden="true" />{event.time}</span>
            <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-[#ffb02e]/70 underline-offset-4 transition-colors hover:text-[#ffb02e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb02e]"><MapPin className="h-5 w-5 shrink-0 text-[#ffb02e]" aria-hidden="true" />{event.location}</a>
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <CTAButtons />
            <span className="text-lg font-black text-[#fff7e9]">{event.price}</span>
          </div>
          <p className="mt-4 max-w-lg text-sm font-semibold text-[#fff7e9]/85">
            Kit com credencial personalizada, crachá e brinde exclusivo dos primeiros 50 ingressos.
          </p>
          <div className="mt-8 border-t border-white/20 pt-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.23em] text-[#fff7e9]/70">O evento começa em</p>
            <CountdownTimer />
          </div>
        </div>

        <div className="relative mx-auto -mb-12 hidden w-full max-w-[570px] self-end lg:block">
          <Image src="/images/halloween-mascot.png" alt="Mascote da Jogadinha Nerd em fantasia de Halloween" width={1312} height={1199} priority sizes="(min-width: 1024px) 43vw, 0px" className="w-full drop-shadow-[0_25px_55px_rgba(0,0,0,.65)]" />
        </div>
      </div>
    </section>
  )
}
