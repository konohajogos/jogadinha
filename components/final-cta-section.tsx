import Image from "next/image"
import { CalendarDays, Clock3, MapPin } from "lucide-react"
import { event } from "@/lib/event"
import { CTAButtons } from "./cta-buttons"

export function FinalCTASection() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
      <Image src="/images/halloween-bg-secondary.png" alt="" fill sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[#100719]/85" />
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.27em] text-[#ffad2c]">A mesa está pronta</p>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight text-[#fff7e9] sm:text-6xl">
          A aventura vai começar. <span className="text-[#ff9b21]">Você vem?</span>
        </h2>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-sm font-semibold text-[#fff7e9] sm:flex-row sm:flex-wrap sm:gap-x-7 sm:text-base">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-[#ffad2c]" aria-hidden="true" />{event.date} · {event.day}</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-5 w-5 text-[#ffad2c]" aria-hidden="true" />{event.time}</span>
          <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-[#ffad2c]/70 underline-offset-4 transition-colors hover:text-[#ffad2c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffad2c]"><MapPin className="h-5 w-5 text-[#ffad2c]" aria-hidden="true" />{event.location}</a>
        </div>
        <p className="mt-7 text-2xl font-black text-[#fff7e9]">Ingresso geral · {event.price}</p>
        <div className="mt-8"><CTAButtons /></div>
        <p className="mt-8 text-sm text-[#fff7e9]/70">Uma realização Konoha Jogos.</p>
      </div>
    </section>
  )
}
