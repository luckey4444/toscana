import Header from '@/components/header'
import Footer from '@/components/footer'

export default function MenuPage() {
  const pizzas = [
    { name: 'Margherita', description: 'Fior di Latte & Basilikum.', price: '8,50 €', image: '/margherita-pizza.png' },
    { name: 'Salami', description: 'Würzige Salami.', price: '9,50 €', image: '/salami-pizza.png' },
    { name: 'Funghi', description: 'Frische Champignons.', price: '9,00 €', image: '/funghi-pizza-mushrooms.jpg' },
    { name: 'Prosciutto', description: 'Schinken & Mozzarella.', price: '9,80 €', image: '/prosciutto-pizza-ham.jpg' },
    { name: 'Diavola', description: 'Scharfe Salami & Chili.', price: '10,20 €', image: '/diavola-spicy-pizza.jpg' },
    { name: 'Tonno e Cipolla', description: 'Thunfisch & Zwiebeln.', price: '10,50 €', image: '/tuna-pizza-onion.jpg' },
    { name: 'Quattro Stagioni', description: 'Artischocken, Schinken, Oliven.', price: '11,20 €', image: '/quattro-stagioni-pizza.jpg' },
    { name: 'Vegetariana', description: 'Grillgemüse & Oregano.', price: '10,80 €', image: '/vegetarian-pizza-vegetables.jpg' },
  ]

  const pastas = [
    { name: 'Penne Arrabiata', description: 'Pikante Sauce.', price: '9,90 €', image: '/penne-arrabiata.jpg' },
    { name: 'Spaghetti Carbonara', description: 'Cremig & herzhaft.', price: '10,90 €', image: '/spaghetti-carbonara.png' },
    { name: 'Tagliatelle al Pesto', description: 'Hausgemachtes Pesto.', price: '11,20 €', image: '/tagliatelle-pesto.jpg' },
  ]

  const salads = [
    { name: 'Insalata Mista', description: 'Frisch & leicht.', price: '6,90 €', image: '/mixed-salad-fresh.jpg' },
    { name: 'Caprese', description: 'Mozzarella & Tomaten.', price: '8,90 €', image: '/caprese-salad.jpg' },
    { name: 'Rucola Salat', description: 'Parmesan & Tomaten.', price: '9,20 €', image: '/arugula-salad-parmesan.jpg' },
  ]

  const desserts = [
    { name: 'Tiramisu', description: 'Hausgemacht.', price: '5,90 €', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Panna Cotta', description: 'Mit Beerensauce.', price: '5,50 €', image: '/placeholder.svg?height=300&width=300' },
  ]

  const MenuItem = ({ item }: { item: any }) => (
    <div className="group">
      <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-muted">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-light mb-2">{item.name}</h3>
      <p className="text-sm text-muted-foreground font-light mb-3">{item.description}</p>
      <p className="text-base font-display text-primary">{item.price}</p>
    </div>
  )

  const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-light mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-balance mb-16">Speisekarte</h1>
          <MenuSection title="Pizza" items={pizzas} />
          <MenuSection title="Pasta" items={pastas} />
          <MenuSection title="Salate" items={salads} />
          <MenuSection title="Desserts" items={desserts} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
