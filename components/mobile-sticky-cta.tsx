"use client"

import { Ticket, MessageCircle } from "lucide-react"

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        <a
          href="https://www.sympla.com.br/evento/jogadinha-nerd---ed-orgulho-nerd/3407081"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-display text-sm font-bold text-white transition-all active:scale-95"
          style={{ backgroundColor: "#0097FF" }}
        >
          <Ticket className="h-4 w-4" />
          Sympla
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5566992005065&text=Gostaria+de+adquirir+o+ingresso+da+jogadinha+nerd&type=phone_number&app_absent=0"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-display text-sm font-bold text-white transition-all active:scale-95"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
