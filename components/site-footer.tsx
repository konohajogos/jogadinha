import { Instagram, AlertCircle, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer
      className="border-t border-white/10 px-4 py-10 pb-24 sm:pb-10"
      style={{ backgroundColor: "#0c1476" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <a
          href="https://instagram.com/konohajogosroo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-[#ffff00]"
        >
          <Instagram className="h-5 w-5" />
          @konohajogosroo
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Evento presencial
          </span>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4" />
            Menores apenas acompanhados
          </span>
        </div>

        <p className="text-xs text-white/40">
          {"Jogadinha Nerd \u2013 Edi\u00E7\u00E3o Orgulho Nerd \u00A9 2026"}
        </p>
      </div>
    </footer>
  )
}
