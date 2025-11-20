'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/98 backdrop-blur z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm font-light">
            Startseite
          </Link>
          <Link href="#menu" className="text-foreground hover:text-primary transition-colors text-sm font-light">
            Speisekarte
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-light">
            Über uns
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-light">
            Kontakt
          </Link>
          <Link href="/impressum" className="text-foreground hover:text-primary transition-colors text-sm font-light">
            Impressum
          </Link>
        </div>

        {/* Center - Empty on desktop, mobile button on mobile */}
        <div className="md:hidden flex-1" />

        {/* Right: Call button and Logo */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+496142727780"
            className="text-sm font-light text-primary hover:text-primary/80 transition-colors hidden sm:inline"
          >
            Anrufen
          </a>
          {/* Round red-white-green logo */}
          <Link href="/" className="w-10 h-10 md:w-12 md:h-12 overflow-hidden flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
            <Image
              src="/logo-badge.jpeg"
              alt="Pizzeria Toscana Bauschheim Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 ml-2"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-foreground hover:text-primary transition-colors text-sm font-light">
              Startseite
            </Link>
            <Link href="#menu" className="block text-foreground hover:text-primary transition-colors text-sm font-light">
              Speisekarte
            </Link>
            <Link href="#about" className="block text-foreground hover:text-primary transition-colors text-sm font-light">
              Über uns
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary transition-colors text-sm font-light">
              Kontakt
            </Link>
            <Link href="/impressum" className="block text-foreground hover:text-primary transition-colors text-sm font-light">
              Impressum
            </Link>
            <a
              href="tel:+496142727780"
              className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center text-sm font-light hover:bg-primary/90 transition-colors"
            >
              Anrufen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
