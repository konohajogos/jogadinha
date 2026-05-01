import Image from "next/image"
import { MeepleIcon } from "./game-icons"

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      <Image
        src="/images/community-background.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="text-center">
          <MeepleIcon className="mx-auto mb-6 h-12 w-12 text-[#ffff00]/50" />

          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {"Experi\u00EAncia "}
            <span style={{ color: "#ffff00" }}>Presencial</span>
          </h2>

          <div className="mt-8 space-y-4 text-xl leading-relaxed text-white/70 sm:text-2xl">
            <p>
              {"Mais do que um evento, a Jogadinha Nerd \u00E9 uma "}
              <span className="font-semibold text-white">comunidade.</span>
            </p>
            <p>
              {"Aqui voc\u00EA n\u00E3o joga sozinho."}
            </p>
            <p className="font-display font-bold" style={{ color: "#ffff00" }}>
              Pois todo nerd tem um lugar na mesa.
            </p>
          </div>

          {/* Ninja mascot */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-32 sm:w-40">
              <Image
                src="/images/ninja-mascot.png"
                alt="Mascote Ninja Konoha"
                width={320}
                height={320}
                className="w-full drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
