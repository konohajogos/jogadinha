"use client"

import { useEffect, useState } from "react"

const EVENT_DATE = new Date("2026-03-21T13:00:00-04:00").getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const difference = EVENT_DATE - Date.now()
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-[#ffff00]/30 font-display text-xl font-bold sm:h-16 sm:w-16 sm:text-2xl"
        style={{ backgroundColor: "rgba(255, 255, 0, 0.08)", color: "#ffff00" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <TimeBlock value={timeLeft.days} label="Dias" />
      <span className="mt-[-1rem] font-display text-xl" style={{ color: "#ffff00" }}>:</span>
      <TimeBlock value={timeLeft.hours} label="Horas" />
      <span className="mt-[-1rem] font-display text-xl" style={{ color: "#ffff00" }}>:</span>
      <TimeBlock value={timeLeft.minutes} label="Min" />
      <span className="mt-[-1rem] font-display text-xl" style={{ color: "#ffff00" }}>:</span>
      <TimeBlock value={timeLeft.seconds} label="Seg" />
    </div>
  )
}
