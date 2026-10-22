import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Script from "next/script";
import { event } from '@/lib/event'
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
  title: `${event.name} | ${event.date}`,
  description:
    `O Halloween de Rondonópolis vai ser diferente: 8 horas de jogos, torneios, desafios e experiências geek. ${event.date}, das ${event.time}, na ${event.location}. Ingresso ${event.price}.`,
  icons: {
    icon: [{ url: '/images/halloween-mascot.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#13091f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#13091f]">
      <body className={`${_spaceGrotesk.variable} ${_inter.variable} font-sans antialiased`}>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1728076811102929');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
