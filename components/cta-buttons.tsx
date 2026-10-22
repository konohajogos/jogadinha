import { ArrowUpRight, Ticket } from "lucide-react"
import { event } from "@/lib/event"

export function CTAButtons({ className = "" }: { className?: string }) {
  return (
    <a
      href={event.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ff7a1a] px-4 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-[#1b0928] shadow-[0_12px_35px_rgba(255,99,15,0.25)] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#ffad2c] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#ffe16c] sm:w-auto sm:gap-3 sm:px-7 sm:text-base ${className}`}
    >
      <Ticket className="h-5 w-5" aria-hidden="true" />
      <span className="sm:hidden">Garantir ingresso</span>
      <span className="hidden sm:inline">Quero garantir meu ingresso</span>
      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
