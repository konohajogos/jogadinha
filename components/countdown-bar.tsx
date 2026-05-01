"use client"

import { CountdownTimer } from "./countdown-timer"

export function CountdownBar() {
  return (
    <section
      className="relative z-40 flex flex-col top-8 items-center justify-center gap-3 px-4 py-8 sm:py-10"
      style={{ backgroundColor: "transparent" }}
    >
      <span
        className="font-display text-xs font-bold uppercase tracking-[0.25em] sm:text-sm"
        style={{ color: "#ffff00" }}
      >
        {"O evento come\u00E7a em"}
      </span>
      <CountdownTimer />
    </section>
  )
}
