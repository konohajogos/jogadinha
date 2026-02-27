import { Ticket, MessageCircle } from "lucide-react"

export function CTAButtons() {
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="font-display text-sm font-semibold text-white sm:text-base uppercase">
        {"Garanta seu ingresso AGORA!"}
      </span>
      <div className="flex w-full items-center gap-3">
        <a
          href="https://www.sympla.com.br/evento/jogadinha-nerd-ed-1-ano-konoha/3310148"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 font-display text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-base"
          style={{ backgroundColor: "#0097FF" }}
        >
          <Ticket className="h-4 w-4 shrink-0 transition-transform group-hover:-rotate-12 sm:h-5 sm:w-5" />
          Sympla
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5566992005065&text=Quero%20adquirir%20o%20ingresso%20para%20a%20Jogadinha%20Nerd%20-%20edi%C3%A7%C3%A3o%20um%20ano%20de%20Konoha#"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 font-display text-sm font-bold text-white transition-all hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-base"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
          {"WhatsApp (sem taxa)"}
        </a>
      </div>
    </div>
  )
}
