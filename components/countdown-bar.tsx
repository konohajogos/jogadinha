"use client"

import { CountdownTimer } from "./countdown-timer"

export function CountdownBar() {
  return (
    <section
      className="relative z-40 flex flex-col items-center justify-center gap-2 px-4 py-6 sm:py-8 top-10"
      style={{ backgroundColor: "#0c1476" }}
    >
      <span
        className="font-display text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
        style={{ color: "#ffff00" }}
      >
        {"O evento come\u00E7a em"}
      </span>
      <CountdownTimer />
    </section>
  )
}
