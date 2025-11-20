'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        {/* Hero Quote */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl md:text-2xl font-light italic text-accent-red mb-8 leading-relaxed">
            "In jeder Pizza steckt unsere Leidenschaft, in jedem Gericht unsere Liebe zur Tradition. 
            Wir laden Sie zu einer kulinarischen Reise durch die Toskana ein."
          </p>
          <div className="w-12 h-0.5 bg-accent-red mx-auto"></div>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Left: Story Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Unsere Geschichte
            </h2>
            
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-text-secondary font-light">
                Pizzeria Toscana Bauschheim ist mehr als ein Restaurant – es ist ein liebevolles Stück Italien im Herzen von Rüsselsheim. 
                Seit Jahren bereiten wir nicht einfach nur Essen zu. Wir erzählen die Geschichte Italiens mit jedem Biss.
              </p>
              
              <p className="text-lg leading-relaxed text-text-secondary font-light">
                Unter der Leitung von Erkan Çelik, der sein Herz und seine Seele in jedes Gericht legt, haben wir es uns zur Mission gemacht, 
                authentische italienische Küche mit den frischesten Zutaten zu servieren. Kein Kompromiss, keine Abkürzungen – nur pure Qualität 
                und italienische Tradition.
              </p>
              
              <p className="text-lg leading-relaxed text-text-secondary font-light">
                Jeden Tag fahren wir mit dem gleichen Gedanken in die Küche: unsere Gäste verdienen das Beste. Das beste Olivenöl aus der Toskana, 
                die frischeste Mozzarella, die hochwertigsten Tomaten – alles für einen Moment der Freude bei uns.
              </p>
            </div>

            {/* Values */}
            <div className="pt-8 border-t border-accent-red/20 mt-8">
              <h3 className="font-bold text-text-primary mb-4">Was uns ausmacht:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red font-bold text-lg mt-1">✓</span>
                  <span className="text-text-secondary font-light">Authentische italienische Rezepte, seit Generationen bewährt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red font-bold text-lg mt-1">✓</span>
                  <span className="text-text-secondary font-light">Frische, hochwertige Zutaten – täglich geliefert, nie kompromittiert</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red font-bold text-lg mt-1">✓</span>
                  <span className="text-text-secondary font-light">Liebevolle Zubereitung mit Leidenschaft und Sorgfalt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red font-bold text-lg mt-1">✓</span>
                  <span className="text-text-secondary font-light">Ein warmes Zuhause für jeden Gast, der unsere Türe betritt</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Image Collage */}
          <div className="relative space-y-6">
            {/* Main Large Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="/warm-italian-pizzeria-kitchen.jpg"
                alt="Unsere leidenschaftliche Küche"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two Side Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-md h-48">
                <img
                  src="/fresh-italian-ingredients-basil-tomato.jpg"
                  alt="Frische Zutaten"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-48">
                <img
                  src="/hands-making-pizza-dough-italian-style.jpg"
                  alt="Handwerk und Tradition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Banner */}
        <div className="bg-accent-red/5 border-2 border-accent-red/20 rounded-2xl p-10 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-red mb-4">
            Unser Versprechen an Sie
          </h3>
          <p className="text-lg text-text-secondary font-light leading-relaxed max-w-3xl mx-auto">
            "Bei uns werden Sie nicht nur satt – Sie werden Teil einer Familie. Jede Pizza, jede Pasta, jedes Gericht ist 
            eine liebevolle Umarmung, die von unserem Team zu Ihrem Tisch kommt. Buon appetito!"
          </p>
        </div>
      </div>
    </section>
  )
}
