import Image from "next/image"
import { Camera } from "lucide-react"

const galleryPhotos = [
  { src: "/images/gallery/foto-01.jpg", alt: "Jogadores disputando uma partida de Catan" },
  { src: "/images/gallery/foto-02.jpg", alt: "Grupo de amigos jogando cartas em evento" },
  { src: "/images/gallery/foto-03.jpg", alt: "Turma reunida jogando Barking Kittens e outros jogos" },
  { src: "/images/gallery/foto-04.jpg", alt: "Partida do jogo de tabuleiro Perfil 7" },
  { src: "/images/gallery/foto-05.jpg", alt: "Miniatura 3D impressa como premio de torneio" },
  { src: "/images/gallery/foto-06.jpg", alt: "Amigos jogando jogo de cartas com mascaras divertidas" },
  { src: "/images/gallery/foto-07.jpg", alt: "Galera se divertindo jogando cartas na Jogadinha" },
  { src: "/images/gallery/foto-08.jpg", alt: "Ganhador exibindo premio e trofeu 3D do evento" },
  { src: "/images/gallery/foto-09.jpg", alt: "Ganhadora do jogo Tapple exibindo seu premio" },
  { src: "/images/gallery/foto-10.jpg", alt: "Encerramento jogadinha de natal" },
]

const placeholderSlots = Array.from({ length: 2 }).map((_, i) => ({
  index: i + galleryPhotos.length + 1,
}))

export function GallerySection() {
  return (
    <section
      className="px-4 py-20 sm:py-28"
      style={{ backgroundColor: "#0c1476" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span
            className="font-display text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#ffff00" }}
          >
            {"Galeria"}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {"Veja como foram as \u00FAltimas edi\u00E7\u00F5es"}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 transition-all hover:border-[#ffff00]/40 hover:shadow-lg hover:shadow-[#ffff00]/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          ))}

          {/* {placeholderSlots.map((slot) => (
            <div
              key={slot.index}
              className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="flex flex-col items-center gap-2 text-white/30">
                <Camera className="h-8 w-8" />
                <span className="text-xs font-medium">
                  {"Foto " + slot.index}
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
