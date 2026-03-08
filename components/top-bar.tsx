"use client"

import { Flame } from "lucide-react"

export function TopBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ backgroundColor: "rgba(12, 20, 118, 0.9)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-sm sm:gap-6 sm:text-base">
        <span className="flex items-center gap-1.5 font-display font-bold" style={{ color: "#ffff00" }}>
          <Flame className="h-4 w-4" />
          {"2\u00BA Lote | \u00DAltimas 20 credenciais dispon\u00EDveis"}
        </span>
      </div>
    </div>
  )
}
