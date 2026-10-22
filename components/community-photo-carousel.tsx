'use client'

import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

const photos = [
  {
    src: '/images/gallery/01.jpg',
    alt: 'Participantes reunidos para jogar em mesas durante a Jogadinha Nerd.',
  },
  {
    src: '/images/gallery/02.png',
    alt: 'Peças coloridas de um jogo de estratégia em uma mesa azul.',
  },
  {
    src: '/images/gallery/03.png',
    alt: 'Tabuleiro de Catan montado com peças e cartas.',
  },
  {
    src: '/images/gallery/04.png',
    alt: 'Partida de jogo de estratégia com peças coloridas sobre uma mesa.',
  },
  {
    src: '/images/gallery/05.png',
    alt: 'Participante joga um card game em uma mesa do evento.',
  },
  {
    src: '/images/gallery/06.jpeg',
    alt: 'Participantes posam diante do painel Konoha Jogos.',
  },
  {
    src: '/images/gallery/07.png',
    alt: 'Torre de blocos de madeira durante uma partida de Jenga.',
  },
  {
    src: '/images/gallery/08.png',
    alt: 'Componentes e tabuleiro de um jogo de mesa organizados sobre a mesa.',
  },
  {
    src: '/images/gallery/09.png',
    alt: 'Seleção de jogos de tabuleiro exposta no evento.',
  },
  {
    src: '/images/gallery/15.jpg',
    alt: 'Participantes posam com produtos diante do painel Konoha Jogos.',
  },
  {
    src: '/images/gallery/11.jpg',
    alt: 'Salão com mesas ocupadas por participantes jogando.',
  },
  {
    src: '/images/gallery/12.jpg',
    alt: 'Participantes com roupas temáticas no espaço do evento.',
  },
  {
    src: '/images/gallery/13.jpg',
    alt: 'Grupo de participantes reunido para uma foto diante do painel do evento.',
  },
  {
    src: '/images/gallery/14.jpg',
    alt: 'Participantes posam juntos em frente ao painel Konoha Jogos.',
  },
  {
    src: '/images/gallery/16.jpeg',
    alt: 'Três participantes posam diante do painel Konoha Jogos.',
  },
]

export function CommunityPhotoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [isPointerOver, setIsPointerOver] = React.useState(false)
  const [hasFocus, setHasFocus] = React.useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  React.useEffect(() => {
    if (!api || isPointerOver || hasFocus || prefersReducedMotion) {
      return
    }

    const timer = window.setInterval(() => api.scrollNext(), 4000)
    return () => window.clearInterval(timer)
  }, [api, hasFocus, isPointerOver, prefersReducedMotion])

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextFocusedElement = event.relatedTarget
    if (!(nextFocusedElement instanceof Node) || !event.currentTarget.contains(nextFocusedElement)) {
      setHasFocus(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-[460px] min-w-0">
      <Carousel
        aria-label="Fotos da comunidade Jogadinha Nerd"
        className="min-w-0"
        opts={{ loop: true, align: 'start' }}
        setApi={setApi}
        onPointerEnter={() => setIsPointerOver(true)}
        onPointerLeave={() => setIsPointerOver(false)}
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={handleBlur}
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={photo.src}>
              <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-[#f8e9d5]/15 bg-[#13091d] shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:h-[320px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 460px, calc(100vw - 32px)"
                  className="object-cover"
                  priority={index === 0}
                />
                <span className="sr-only" aria-live="off">
                  Foto {index + 1} de {photos.length}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Foto anterior"
          className="left-3 border-[#f8e9d5]/30 bg-[#240e30]/90 text-[#fff4df] hover:bg-[#ff9f45] hover:text-[#240e30]"
        />
        <CarouselNext
          aria-label="Próxima foto"
          className="right-3 border-[#f8e9d5]/30 bg-[#240e30]/90 text-[#fff4df] hover:bg-[#ff9f45] hover:text-[#240e30]"
        />
      </Carousel>
    </div>
  )
}
