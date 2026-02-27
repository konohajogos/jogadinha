import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'

import './globals.css'

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jogadinha Nerd - 1 Ano Konoha | 21 de Março de 2026',
  description:
    'A maior edição da Jogadinha Nerd! Jogos de tabuleiro, RPG, Magic, Pokémon e muito mais. 21/03/2026 na UNEMAT. Garanta seu ingresso!',
}

export const viewport: Viewport = {
  themeColor: '#0a0d1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_spaceGrotesk.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
