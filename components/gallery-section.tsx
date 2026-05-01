import Image from "next/image"
import { Camera } from "lucide-react"

const galleryPhotos = [
  { src: "/images/gallery/01.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/02.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/03.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/04.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/05.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/06.jpeg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/07.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/08.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/09.png", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/15.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/11.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/12.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/13.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/14.jpg", alt: "Jogadinha Nerd Ed. 1 Ano" },
  { src: "/images/gallery/16.jpeg", alt: "Jogadinha Nerd Ed. 1 Ano" },

]

export function GallerySection() {
  return (
    <section
      className="px-4 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #0a1a4a, #0c1476)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2" style={{ color: "#ffff00" }}>
            <Camera className="h-5 w-5" />
            <span className="font-display text-sm font-semibold uppercase tracking-widest">
              Galeria
            </span>
          </div>
          <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
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
        </div>
      </div>
    </section>
  )
}
