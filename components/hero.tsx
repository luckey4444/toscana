import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/logo-badge.jpeg"
                alt="Pizzeria Toscana Bauschheim Logo"
                width={224}
                height={224}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center max-w-2xl">
            <h1 className="text-balance leading-tight">
              Italienischer Geschmack. Direkt aus Bauschheim.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
              Tradition, Leidenschaft und frische Zutaten – seit vielen Jahren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <a
                href="#menu"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-center font-light hover:bg-primary/90 transition-colors"
              >
                Speisekarte ansehen
              </a>
              <a
                href="tel:+496142123456"
                className="px-6 py-3 border border-primary text-primary rounded-lg text-center font-light hover:bg-primary/5 transition-colors"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-2xl">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-sm">
              <img
                src="/warm-italian-pizza-interior-restaurant.jpg"
                alt="Pizzeria Toscana Bauschheim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
