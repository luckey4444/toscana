import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-balance mb-16">Impressum</h1>

          <div className="space-y-12">
            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-light mb-6">Anbieter</h2>
              <div className="text-muted-foreground font-light space-y-2">
                <p className="text-lg">Pizzeria Toscana Bauschheim</p>
                <p>Inhaber: Erkan Çelik</p>
                <p className="mt-4">Brunnenstraße 24</p>
                <p>65428 Rüsselsheim am Main</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-light mb-6">Kontakt</h2>
              <div className="text-muted-foreground font-light space-y-3">
                <p>
                  <span className="font-display font-light">Telefon:</span> <a href="tel:+496142727780" className="text-primary hover:underline">06142/72780</a>
                </p>
                <p>
                  <span className="font-display font-light">E-Mail:</span> <a href="mailto:esmaerkan131@gmail.com" className="text-primary hover:underline">esmaerkan131@gmail.com</a>
                </p>
              </div>
            </section>

            {/* Tax Information */}
            <section>
              <h2 className="text-2xl font-light mb-6">Steuernummer</h2>
              <p className="text-muted-foreground font-light">11 021 809 33520 57 1812</p>
            </section>

            {/* Wine Highlight Box */}
            <section className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-lg my-8">
              <h3 className="text-lg font-display font-light mb-4 text-orange-900">Hinweis zu Getränken</h3>
              <div className="text-orange-900 font-light space-y-3">
                <p className="font-medium">Wein:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><span className="font-semibold">Chianti (trocken) 0,75L</span> – 8,00€</li>
                </ul>
                <p className="text-sm italic mt-4 pt-3 border-t border-orange-300">
                  *Koffeinhaltig; **farbstoffhaltig; ***; koffein und farbstoffhaltig. 
                  Hinweise zu den Inhaltsstoffen unserer Pizzagerichte:
                </p>
                <ul className="list-decimal list-inside space-y-1 text-sm ml-2 mt-2">
                  <li>mit Konservierungsstoff und Zuckerstoff</li>
                  <li>mit Phosphat</li>
                  <li>geschwefelt, konserviert, Geschmacksverstärker und gekochter Form-Vorderschinken</li>
                  <li>mit Konservierungsstoff und Geschmacksverstärker</li>
                </ul>
              </div>
            </section>

            {/* Legal Information */}
            <section>
              <h2 className="text-2xl font-light mb-6">Rechtliche Hinweise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-3">§ 1 Haftungsbeschränkung</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Alle Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Beiträge im Gästebuch geben die Meinung des Autors wider und nicht zwangsläufig die Meinung des Anbieters.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-3">§ 2 Externe Links</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Das Setzen von Links zu Websites Dritter ist nicht gestattet. Sollten im Gästebuch von den Nutzern Links zu Websites Dritter gesetzt werden, so unterliegen diese Websites der Haftung der jeweiligen Betreiber. Sollten solche Links Rechtsverstöße enthalten, wird der Anbieter diese nach einem Hinweis auf den Rechtsverstoß löschen. Eine proaktive Überprüfung solcher Links auf rechtwidrige Inhalte ist dem Anbieter nicht zumutbar.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-light mb-3">§ 3 Urheberrecht</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Jede Vervielfältigung der Inhalte, insbesondere der Bilder, bedarf der vorherigen schriftlichen Zustimmung des Anbieters, der gleichzeitig Rechteinhaber ist.
                  </p>
                </div>
              </div>
            </section>

            {/* Location & Map */}
            <section>
              <h2 className="text-2xl font-light mb-6">Unser Standort</h2>
              <div className="rounded-2xl overflow-hidden h-96 bg-muted border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.5677891852316!2d8.411733!3d50.017089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sde!2sde!4v1234567890&q=Brunnenstra%C3%9Fe+24,+65428+R%C3%BCsselsheim"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground font-light mt-4">
                Brunnenstraße 24, 65428 Rüsselsheim am Main
              </p>
            </section>

            {/* Last Updated */}
            <div className="text-xs text-muted-foreground font-light text-center pt-8 border-t border-border">
              Zuletzt aktualisiert: November 2025
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
