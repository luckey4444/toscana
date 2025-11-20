export default function Reviews() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground font-light">
            4,7 Sterne basierend auf 198 Google Reviews
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="p-8 bg-card rounded-2xl border border-border">
            <p className="text-foreground font-light leading-relaxed mb-4">
              „Beste Pizza in Bauschheim. Immer frisch."
            </p>
            <p className="text-sm text-muted-foreground font-light">Marco S.</p>
          </div>
          <div className="p-8 bg-card rounded-2xl border border-border">
            <p className="text-foreground font-light leading-relaxed mb-4">
              „Super freundlich und unglaublich lecker."
            </p>
            <p className="text-sm text-muted-foreground font-light">Anna K.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
