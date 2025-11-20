'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 md:mb-16">Kontakt</h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light mb-3">Adresse</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Brunnenstraße 24<br />
                65428 Rüsselsheim am Main
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light mb-3">Telefon</h3>
              <a
                href="tel:+496142123456"
                className="text-primary font-light hover:text-primary/80 transition-colors text-lg"
              >
                +49 6142 123456
              </a>
            </div>

            <div>
              <h3 className="text-lg font-light mb-3">Öffnungszeiten</h3>
              <div className="space-y-2 text-sm font-light text-muted-foreground">
                <p>Montag – Mittwoch: 11:00 – 22:00 Uhr</p>
                <p>Donnerstag: 11:00 – 22:00 Uhr</p>
                <p>Freitag: 11:00 – 23:00 Uhr</p>
                <p>Samstag: 12:00 – 23:00 Uhr</p>
                <p>Sonntag: 12:00 – 22:00 Uhr</p>
                <p className="text-primary">Dienstag: Ruhetag</p>
              </div>
            </div>

            <a
              href="tel:+496142123456"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                placeholder="ihre.email@example.com"
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
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                placeholder="+49 ..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                placeholder="Ihre Nachricht..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12 md:mt-16 rounded-xl overflow-hidden h-80 md:h-96 bg-muted border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.8!2d8.3338!3d49.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0x47bd4c8e7f7f7f7f%3A0x12345!2sBrunnenstra%C3%9Fe%2024%2C%2065428%20R%C3%BCsselsheim%20am%20Main!5e0!3m2!1sde!2sde!4v1700242800000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
