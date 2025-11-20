import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ContactPage() {
  const hours = [
    { day: 'Montag', time: '11:00 – 22:00 Uhr' },
    { day: 'Dienstag', time: 'Ruhetag' },
    { day: 'Mittwoch', time: '11:00 – 22:00 Uhr' },
    { day: 'Donnerstag', time: '11:00 – 22:00 Uhr' },
    { day: 'Freitag', time: '11:00 – 23:00 Uhr' },
    { day: 'Samstag', time: '12:00 – 23:00 Uhr' },
    { day: 'Sonntag', time: '12:00 – 22:00 Uhr' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-balance mb-12">Kontakt</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light mb-3">Adresse</h3>
                <p className="text-muted-foreground font-light">
                  Brunnenstraße 24<br />
                  65428 Rüsselsheim am Main
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-3">Telefon</h3>
                <a href="tel:+496142123456" className="text-primary font-light hover:underline">
                  +49 6142 123456
                </a>
              </div>

              <a
                href="tel:+496142123456"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-center font-light hover:bg-primary/90 transition-colors w-fit block"
              >
                Jetzt anrufen
              </a>

              {/* Opening Hours */}
              <div>
                <h3 className="text-lg font-light mb-4">Öffnungszeiten</h3>
                <div className="space-y-2">
                  {hours.map((hour) => (
                    <div key={hour.day} className="flex justify-between text-sm">
                      <span className="font-light">{hour.day}</span>
                      <span className={`font-light ${hour.time === 'Ruhetag' ? 'text-muted-foreground' : ''}`}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Ihre Telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl font-light focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-light hover:bg-primary/90 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-96 bg-muted border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.5677891852316!2d8.411733!3d50.017089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd4e8e8e8e8e8d%3A0x0!2sRusselheim!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
