import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AboutPage() {
  const values = [
    { title: 'Qualität', description: 'Frische Zutaten, täglich geliefert' },
    { title: 'Familienbetrieb', description: 'Mit Herz und Leidenschaft' },
    { title: 'Leidenschaft', description: 'Italienische Tradition seit vielen Jahren' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="aspect-video rounded-3xl overflow-hidden mb-12 bg-muted">
              <img
                src="/placeholder.svg?height=600&width=1200"
                alt="Pizzeria Interior"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-balance mb-6">Mit Liebe. Mit Tradition. Mit Geschmack.</h1>

            <div className="prose prose-lg max-w-3xl text-muted-foreground font-light leading-relaxed mb-12 space-y-4">
              <p>
                Die Pizzeria Toscana Bauschheim ist ein liebevoll geführter Familienbetrieb, der für authentische italienische Küche steht.
              </p>
              <p>
                Wir arbeiten mit frischen Zutaten, traditionellen Rezepten und echter Leidenschaft.
              </p>
              <p>
                Seit vielen Jahren sind wir ein beliebter Treffpunkt für Pizza- und Pastaliebhaber in Bauschheim.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
