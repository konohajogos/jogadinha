import Image from "next/image"
import { Sparkles, Star } from "lucide-react"

export function CosplaySection() {
  return (
    <section className="relative px-4 py-16 sm:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-nerd.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1a4a]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className="relative overflow-hidden rounded-2xl border-2 border-[#ffff00] p-8 text-center sm:p-12"
          style={{ backgroundColor: "rgba(10, 26, 74, 0.8)" }}
        >
          {/* Decorative stars */}
          <Star
            className="absolute top-4 left-4 h-6 w-6 text-[#ffff00]/30"
            fill="currentColor"
          />
          <Star
            className="absolute bottom-4 right-4 h-8 w-8 text-[#ffff00]/30"
            fill="currentColor"
          />
          <Star
            className="absolute top-6 right-8 h-4 w-4 text-[#ffff00]/20"
            fill="currentColor"
          />

          <div className="relative z-10 flex flex-row items-center gap-24 sm:gap-24">
            <div className="flex flex-col items-center justify-center gap-3">
              {/* <Sparkles className="h-10 w-10 text-[#ffff00]" /> */}
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl lg:text-5xl" style={{ color: "#ffff00" }}>
                {"Cosplay \u00E9"}
                <span className="block whitespace-nowrap">bem-vindo!</span>
              </h2>
              <p className="max-w-md text-lg text-white/80">
                Vista-se do seu personagem favorito e venha brilhar no evento
              </p>
            </div>

            <div className="relative w-40 sm:w-48 lg:w-56">
            <Image
              src="/images/ninja-cosplay.png"
              alt="Mascote Ninja - Cosplay"
              width={224}
              height={280}
              className="w-full drop-shadow-2xl"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
