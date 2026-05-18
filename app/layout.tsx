import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const kangen = localFont({
  src: '../kangen.otf',
  variable: '--font-display',
  display: 'swap',
})

const futura = localFont({
  src: '../futura-light.ttf',
  variable: '--font-body',
  display: 'swap',
  weight: '300',
})

const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kayen | Helados Artesanales B2B',
  description: 'Helados artesanales premium para cafeterías, hoteles, restaurantes y negocios gastronómicos. Sabor artesanal para tu negocio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${kangen.variable} ${futura.variable} ${mono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
