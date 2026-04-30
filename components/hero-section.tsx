"use client"

import Image from "next/image"
import { CalendarDays, Clock, MapPin, Flame, Sparkles } from "lucide-react"
import { CTAButtons } from "./cta-buttons"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-8 sm:pt-20 sm:pb-10">
      {/* Background image - extends to cover countdown section below */}
      <div className="absolute inset-0 z-0" style={{ bottom: "-200px" }}>
        <Image
          src="/images/background-nerd.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a4a]/60 via-transparent to-[#0a1a4a]" />
      </div>

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 sm:h-[900px] sm:w-[900px]"
        style={{
          background:
            "radial-gradient(circle, hsl(220 80% 40% / 0.3) 0%, hsl(220 80% 20% / 0.1) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text content */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffff00]/40 bg-[#ffff00]/15 px-4 py-2 text-sm font-bold uppercase tracking-wider" style={{ color: "#ffff00" }}>
            <Sparkles className="h-4 w-4" />
            {"Segunda Edi\u00E7\u00E3o"}
          </div>

          {/* Title */}
          <h1 className="text-balance font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {"A EXPERI\u00CANCIA NERD COM JOGOS DE TABULEIRO MAIS INSANA DE RONDON\u00D3POLIS"}
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
            {"Um dia inteiro de jogos de tabuleiro, desafios, amigos e muita divers\u00E3o"}
          </p>

          {/* Event info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <div className="flex items-center gap-2 rounded-lg border border-[#ffff00]/30 bg-[#0a1a4a]/80 px-3 py-2.5 sm:px-4 sm:py-3">
              <CalendarDays className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-bold text-white sm:text-base">
                23 de Maio de 2026
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#ffff00]/30 bg-[#0a1a4a]/80 px-3 py-2.5 sm:px-4 sm:py-3">
              <Clock className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-bold text-white sm:text-base">
                {"13h \u00E0s 21h"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#ffff00]/30 bg-[#0a1a4a]/80 px-3 py-2.5 sm:px-4 sm:py-3">
              <MapPin className="h-5 w-5" style={{ color: "#ffff00" }} />
              <span className="font-display text-sm font-bold text-white sm:text-base">UNEMAT</span>
            </div>
          </div>

          {/* 1st Lot Yellow Banner */}
          <div
            className="flex w-full flex-col items-center justify-center gap-2 rounded-xl px-6 py-4 sm:px-8 sm:py-5"
            style={{ backgroundColor: "#ffff00" }}
          >
            <div className="flex items-center justify-center gap-4">
              <Flame className="h-7 w-7 shrink-0 text-black" />
              <span className="font-display text-xl font-extrabold whitespace-nowrap text-black sm:text-2xl">
                {"1\u00BA LOTE"}
              </span>
              <span className="mx-1 h-8 w-px shrink-0 bg-black/30" aria-hidden="true" />
              <span className="font-display text-4xl font-extrabold whitespace-nowrap text-black sm:text-5xl">
                R$ 35,00
              </span>
            </div>
            <span className="text-sm font-semibold text-black/70">
              {"At\u00E9 08/05/26"}
            </span>
          </div>

          {/* Urgency text */}
          <p className="text-center text-sm font-medium text-white/90 lg:text-left">
            Os primeiros <span className="font-bold" style={{ color: "#ffff00" }}>50 ingressos</span> ganham credencial + brinde exclusivo
          </p>

          {/* CTA buttons */}
          <CTAButtons />
        </div>

        {/* Logo and Ninja combined image */}
        <div className="flex flex-col items-center justify-center lg:justify-center">
          <div className="relative w-72 sm:w-80 lg:w-[450px]">
            <Image
              src="/images/logo-ninja-combined.png"
              alt="Jogadinha Nerd - Edição Orgulho Nerd"
              width={450}
              height={600}
              className="w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
