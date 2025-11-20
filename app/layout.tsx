import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Pizzeria Toscana Bauschheim | Authentische Italienische Pizza',
  description: 'Authentische italienische Pizza und Pasta mit frischen Zutaten in Bauschheim. Traditionelle Rezepte seit vielen Jahren.',
  keywords: 'Pizza, Pizzeria, Bauschheim, Rüsselsheim, Italienisch, Pasta',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFF7EF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
