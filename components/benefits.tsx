export default function Benefits() {
  const benefits = [
    {
      title: 'Frische Zutaten',
      description: 'Täglich frische, hochwertige Zutaten für den besten Geschmack.',
    },
    {
      title: 'Traditionelle Rezepte',
      description: 'Authentische italienische Rezepte, generation-überliefert.',
    },
    {
      title: 'Familienbetrieb',
      description: 'Mit Herz und Leidenschaft seit vielen Jahren geführt.',
    },
    {
      title: 'Schnelle & herzliche Abholung',
      description: 'Einfach bestellen, schnell abholen, immer freundlich.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg md:text-base font-light mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
