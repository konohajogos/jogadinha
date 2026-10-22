import Image from "next/image"

export function CosplaySection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#13091d] px-4 py-20 sm:py-28">
      <Image
        src="/images/halloween-bg-secondary.png"
        alt=""
        fill
        sizes="100vw"
        className="z-0 object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#13091d]/95 via-[#13091d]/80 to-[#13091d]/50" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-14">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-[#ff9f45]">
            Entre no clima
          </p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-tight text-[#fff4df] sm:text-5xl lg:text-6xl">
            Cosplay é bem-vindo!
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f8e9d5] sm:text-xl">
            Vista-se do seu personagem favorito e venha brilhar no Halloween. Teremos um desfile de fantasias com premiação.
          </p>
          <p className="mt-5 max-w-2xl text-base font-semibold text-[#ffbd76]">
            A fantasia é um convite, não uma obrigação. Você pode participar do seu jeito.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#f8e9d5]/15 shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
          <Image
            src="/images/cosplay.webp"
            alt="Grupo de participantes com fantasias de personagens e temas de Halloween reunido para uma foto."
            width={1800}
            height={1350}
            sizes="(min-width: 768px) 560px, calc(100vw - 32px)"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
