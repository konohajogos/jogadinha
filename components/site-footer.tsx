import { Instagram, MapPin } from "lucide-react"
import { event } from "@/lib/event"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0715] px-5 pb-24 pt-10 text-[#fff7e9] sm:px-8 sm:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-black">Jogadinha Nerd <span className="text-[#ff9b21]">/ Halloween</span></p>
          <p className="mt-1 text-xs text-[#fff7e9]/55">© 2026 Konoha Jogos</p>
        </div>
        <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#fff7e9]/75 underline decoration-[#ffad2c]/70 underline-offset-4 transition-colors hover:text-[#ffad2c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffad2c]"><MapPin className="h-4 w-4 text-[#ffad2c]" aria-hidden="true" />{event.location}</a>
        <a href="https://instagram.com/konohajogosroo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#fff7e9] hover:text-[#ffad2c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffad2c]"><Instagram className="h-5 w-5" aria-hidden="true" />@konohajogosroo</a>
      </div>
    </footer>
  )
}
