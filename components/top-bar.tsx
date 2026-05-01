"use client"

import { Flame, Ticket } from "lucide-react"

export function TopBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ backgroundColor: "rgba(12, 20, 118, 0.9)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-sm sm:gap-6 sm:text-base">
        <div className="flex flex-col items-center gap-0.5">
          <span className="flex items-center gap-1.5 font-display font-bold" style={{ color: "#ffff00" }}>
            <Flame className="h-4 w-4" />
            {"1\u00BA Lote \u2013 R$35"}
          </span>
          <span className="text-xs text-white/60">{"At\u00E9 08/05/26"}</span>
        </div>
        <span className="hidden h-8 w-px bg-white/20 sm:block" aria-hidden="true" />
        <div className="flex flex-col items-center gap-0.5">
          <span className="flex items-center gap-1.5 text-white/80">
            <Ticket className="h-4 w-4" style={{ color: "#ffff00" }} />
            {"50 primeiras credenciais exclusivas"}
          </span>
          <span className="text-xs text-white/60">{"At\u00E9 08/05/26"}</span>
        </div>
      </div>
    </div>
  )
}
