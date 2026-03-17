"use client"

import Image from "next/image"
import { CalendarDays, Clock, MapPin, Flame } from "lucide-react"
import { D20Icon, D4Icon, D8Icon, D12Icon, MeepleIcon, BoardGamePieceIcon } from "./game-icons"
import { CTAButtons } from "./cta-buttons"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 py-15"
      style={{ backgroundColor: "#0c1476" }}
    >
      {/* Background decorative RPG dice & board game icons */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <D20Icon className="animate-float absolute top-16 left-[8%] h-14 w-14 text-[#ffff00]/10 sm:h-20 sm:w-20" />
        <D4Icon className="animate-float absolute top-32 right-[12%] h-10 w-10 text-[#ffff00]/10 sm:h-14 sm:w-14" style={{ animationDelay: "1s" }} />
        <D8Icon className="animate-float absolute bottom-24 left-[15%] h-12 w-12 text-[#ffff00]/10 sm:h-16 sm:w-16" style={{ animationDelay: "2s" }} />
        <D12Icon className="animate-float absolute right-[8%] bottom-32 h-10 w-10 text-[#ffff00]/10 sm:h-14 sm:w-14" style={{ animationDelay: "0.5s" }} />
        <MeepleIcon className="animate-float absolute top-48 left-[4%] h-8 w-8 text-[#ffff00]/10 sm:h-12 sm:w-12" style={{ animationDelay: "1.5s" }} />
        <BoardGamePieceIcon className="animate-float absolute bottom-48 right-[5%] h-10 w-10 text-[#ffff00]/10 sm:h-14 sm:w-14" style={{ animationDelay: "2.5s" }} />
        <D20Icon className="animate-float absolute top-[60%] left-[45%] h-8 w-8 text-[#ffff00]/8 sm:h-10 sm:w-10" style={{ animationDelay: "3s" }} />
        <D4Icon className="animate-float absolute bottom-16 left-[50%] h-8 w-8 text-[#ffff00]/8" style={{ animationDelay: "0.8s" }} />
      </div> */}

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 sm:h-[900px] sm:w-[900px]"
        style={{
          background:
            "radial-gradient(circle, hsl(42 100% 50% / 0.1) 0%, hsl(230 80% 30% / 0.08) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">


        {/* Text content */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffff00]/30 bg-[#ffff00]/10 px-4 py-1.5 text-sm font-medium" style={{ color: "#ffff00" }}>
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "#ffff00" }} />
            {"Edi\u00E7\u00E3o Especial \u2013 1 Ano"}
          </div>

          {/* Title */}
          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-white">Jogadinha </span>
            <span style={{ color: "#ffff00" }}>Nerd</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
            {"Uma tarde inteira de jogatina para se conectar, desafiar amigos, conhecer jogos incr\u00EDveis e criar mem\u00F3rias que v\u00E3o muito al\u00E9m da mesa."}
          </p>

          {/* Event info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
              <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-semibold text-white sm:text-base">
                {"21 de Mar\u00E7o de 2026"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-semibold text-white sm:text-base">
                {"13h \u00E0s 22h"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-semibold text-white sm:text-base">UNEMAT</span>
            </div>
          </div>

          {/* 1st Lot Yellow Banner */}
          <div
            className="flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3 sm:px-8 sm:py-4"
            style={{ backgroundColor: "#ffff00" }}
          >
            <Flame className="h-6 w-6 shrink-0 text-black" />
            <span className="font-display text-lg font-extrabold whitespace-nowrap text-black sm:text-xl">
              {"3\u00BA LOTE"}
            </span>
            <span className="mx-1 h-7 w-px shrink-0 bg-black/30" aria-hidden="true" />
            <span className="font-display text-3xl font-extrabold whitespace-nowrap text-black sm:text-4xl">
              R$ 40,00
            </span>
          </div>

          {/* CTA buttons */}
          <CTAButtons />
        </div>

        {/* Logo image */}
        <div className="flex flex-1 items-center justify-center lg:justify-center">
          <div className="relative aspect-square w-300 sm:w-80 lg:w-full lg:max-w-[900px]">
            <Image
              src="/images/logo-jogadinha.png"
              alt="Jogadinha Nerd - Edicao 1 Ano de Konoha"
              fill
              className="object-cover drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
