import { Ticket } from "lucide-react"
import { event } from "@/lib/event"

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ff9b21]/30 bg-[#13071f]/95 p-3 backdrop-blur-md sm:hidden">
      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff8a1c] px-4 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-[#1b0928] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe16c]">
        <Ticket className="h-5 w-5" aria-hidden="true" />
        Garantir ingresso · {event.price}
      </a>
    </div>
  )
}
