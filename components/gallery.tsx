'use client'

export default function Gallery() {
  const images = [
    { 
      alt: 'Frische Margherita Pizza', 
      query: 'authentic margherita pizza top down italian traditional white background mozzarella basil tomato',
      title: 'Margherita' 
    },
    { 
      alt: 'Hausgemachte Pasta', 
      query: 'fresh handmade italian pasta carbonara creamy sauce white background professional food photography',
      title: 'Pasta Fresca' 
    },
    { 
      alt: 'Italienischer Salat', 
      query: 'fresh italian caprese salad mozzarella tomato basil olive oil white background artisanal',
      title: 'Insalata' 
    },
    { 
      alt: 'Warme Pizzeria Atmosphäre', 
      query: 'cozy authentic italian pizzeria restaurant interior warm lights family dining traditional',
      title: 'Unser Zuhause' 
    },
    { 
      alt: 'Frische italienische Zutaten', 
      query: 'italian cuisine ingredients tomato basil mozzarella olive oil fresh artisanal white background',
      title: 'Qualität' 
    },
    { 
      alt: 'Handwerkliche Pizza Zubereitung', 
      query: 'pizza chef preparing dough traditional italian pizzeria kitchen fire oven artisanal craftsmanship',
      title: 'Handwerk' 
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Galerie</h2>
          <p className="text-lg text-text-secondary font-light max-w-2xl mx-auto">
            Ein Einblick in die Leidenschaft, Qualität und Liebe, die wir täglich in unsere Küche bringen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/.jpg?height=500&width=500&query=${image.query}`}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
