import { ArrowUpRight } from "lucide-react"
import { event } from "@/lib/event"

export function TopBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#12081e]/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#inicio" className="font-display text-sm font-black uppercase tracking-[0.12em] text-[#fff7e9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffb02e] sm:text-base">
          <span className="sm:hidden">JN <span className="text-[#ff9b21]">/ Halloween</span></span>
          <span className="hidden sm:inline">Jogadinha Nerd <span className="text-[#ff9b21]">/ Halloween</span></span>
        </a>
        <span className="hidden text-sm font-semibold text-[#fff7e9]/80 md:block">{event.date} · {event.time}</span>
        <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-[#ff9b21]/70 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#fff7e9] transition-colors hover:bg-[#ff9b21] hover:text-[#1b0928] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe16c] sm:px-5 sm:text-sm">
          Inscrever-se <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
