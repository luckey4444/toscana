import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background-warm border-t border-border py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 pb-8 md:pb-12 border-b border-border">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-white to-accent-green flex items-center justify-center shadow-sm">
              <span className="text-sm font-display font-bold text-primary">PT</span>
            </div>
            <span className="text-lg font-display font-light">Pizzeria Toscana</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row gap-6 md:gap-8 text-sm font-light">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Startseite
            </Link>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Speisekarte
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Über uns
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
            <Link href="/impressum" className="text-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 text-center text-xs font-light text-muted-foreground">
          © 2025 Pizzeria Toscana Bauschheim · Mit Liebe geführt
        </div>
      </div>
    </footer>
  )
}
