import { Ticket, MessageCircle, ArrowRight } from "lucide-react"

export function CTAButtons() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-center gap-2 lg:justify-start">
        <ArrowRight className="h-5 w-5 animate-pulse" style={{ color: "#ffff00" }} />
        <span className="font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
          Garantir meu ingresso agora!
        </span>
      </div>
      <div className="flex w-full items-center gap-3">
        <a
          href="https://www.sympla.com.br/evento/jogadinha-nerd-ed-orgulho-nerd/3310148"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-4 font-display text-base font-bold text-white transition-all hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-lg"
          style={{ backgroundColor: "#0097FF" }}
        >
          <Ticket className="h-5 w-5 shrink-0 transition-transform group-hover:-rotate-12 sm:h-6 sm:w-6" />
          Sympla
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5566992005065&text=Quero%20adquirir%20o%20ingresso%20para%20a%20Jogadinha%20Nerd%20-%20edi%C3%A7%C3%A3o%20Orgulho%20Nerd"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-4 font-display text-base font-bold text-white transition-all hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-lg"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
