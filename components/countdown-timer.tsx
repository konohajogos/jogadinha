"use client"

import { useEffect, useState } from "react"
import { event } from "@/lib/event"

const eventTime = new Date(event.startsAt).getTime()

function timeLeft() {
  const seconds = Math.max(0, Math.floor((eventTime - Date.now()) / 1000))
  return [
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]
}

export function CountdownTimer() {
  const [values, setValues] = useState<number[] | null>(null)

  useEffect(() => {
    setValues(timeLeft())
    const timer = window.setInterval(() => setValues(timeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-5 sm:gap-8" aria-label="Contagem regressiva para o início do evento">
      {["dias", "horas", "min", "seg"].map((label, index) => (
        <div className="flex min-w-10 flex-col items-center" key={label}>
          <span className="font-display text-2xl font-black tabular-nums text-[#ffb02e] sm:text-3xl" suppressHydrationWarning>
            {values ? String(values[index]).padStart(2, "0") : "--"}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff7e9]/65">{label}</span>
        </div>
      ))}
    </div>
  )
}
