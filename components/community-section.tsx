import { event } from "@/lib/event"
import { CommunityPhotoCarousel } from "@/components/community-photo-carousel"

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-[#240e30] px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-14">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
            O que você precisa saber
          </p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-extrabold leading-tight text-[#fff4df] sm:text-5xl">
            Experiência presencial. Comunidade de verdade.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f8e9d5]/85">
            Mais do que um evento, a Jogadinha Nerd é uma comunidade. Aqui você não joga sozinho: encontra pessoas, descobre jogos e compartilha a aventura.
          </p>
          <p className="mt-6 font-display text-xl font-bold text-[#ffbd76] sm:text-2xl">
            Todo nerd tem um lugar na mesa.
          </p>
          <p className="mt-8 border-t border-[#f8e9d5]/20 pt-6 text-base leading-relaxed text-[#fff4df]">
            {event.date}, {event.day} · {event.time}<br />
            <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block underline decoration-[#ff9f45]/70 underline-offset-4 transition-colors hover:text-[#ffbd76] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9f45]">{event.location}</a>
          </p>
        </div>

        <CommunityPhotoCarousel />
      </div>
    </section>
  )
}
