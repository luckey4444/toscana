export default function LocationHours() {
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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-light mb-3">Adresse</h3>
              <p className="text-muted-foreground font-light">
                Brunnenstraße 24<br />
                65428 Rüsselsheim am Main
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light mb-3">Telefonieren</h3>
              <a
                href="tel:+496142123456"
                className="text-primary font-light hover:underline"
              >
                +49 6142 123456
              </a>
            </div>

            <a
              href="tel:+496142123456"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-center font-light hover:bg-primary/90 transition-colors w-fit"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-light mb-6">Öffnungszeiten</h3>
            <div className="space-y-3">
              {hours.map((hour) => (
                <div key={hour.day} className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-light">{hour.day}</span>
                  <span className={`font-light ${hour.time === 'Ruhetag' ? 'text-muted-foreground' : ''}`}>
                    {hour.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden h-96 bg-muted border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.8!2d8.3338!3d49.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0x47bd4c8e7f7f7f7f%3A0x12345!2sBrunnenstra%C3%9Fe%2024%2C%2065428%20R%C3%BCsselsheim%20am%20Main!5e0!3m2!1sde!2sde!4v1700242800000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
