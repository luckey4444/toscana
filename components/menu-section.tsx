'use client'

import { useState } from 'react'
import MenuModal from './menu-modal'

const pizzas = [
  { id: 1, name: 'Margherita', sizes: [5.50, 6.50, 11.00], ingredients: 'Tomatensauce, Käse' },
  { id: 2, name: 'Salami', sizes: [5.70, 6.70, 11.20], ingredients: 'Tomatensauce, Käse, Salami¹' },
  { id: 3, name: 'Salami Pilze', sizes: [6.50, 7.50, 12.00], ingredients: 'Tomatensauce, Käse, Salami¹, Pilze' },
  { id: 4, name: 'Schinken Pilze', sizes: [6.50, 7.50, 12.00], ingredients: 'Tomatensauce, Käse, Schinken², Pilze' },
  { id: 5, name: 'Peperoni', sizes: [6.00, 7.00, 11.50], ingredients: 'Tomatensauce, Käse, Peperonisalami¹' },
  { id: 6, name: 'Primavera', sizes: [6.70, 7.70, 12.40], ingredients: 'Tomatensauce, Käse, Salami¹, Pilze, Zwiebeln' },
  { id: 7, name: 'Capricciosa', sizes: [6.70, 7.70, 12.40], ingredients: 'Tomatensauce, Käse, Schinken², Pilze, Zwiebeln' },
  { id: 8, name: 'Panna', sizes: [6.50, 7.50, 12.00], ingredients: 'Sahne, Käse, Schinken²' },
  { id: 9, name: 'Mafia', sizes: [6.50, 7.50, 12.00], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Pilze' },
  { id: 10, name: 'Quattrostagioni', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Pilze, Paprika, Artischocken, Ei' },
  { id: 11, name: 'Caruso', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Pilze, Oliven, Sardellen' },
  { id: 12, name: 'Sofia Loren', sizes: [6.70, 7.70, 12.40], ingredients: 'Tomatensauce, Käse, Salami¹, Pilze, 2 Spiegeleier' },
  { id: 13, name: 'Chef', sizes: [6.70, 7.70, 12.40], ingredients: 'Tomatensauce, Käse, Speck³, Knoblauch, Oliven' },
  { id: 14, name: 'Teufel', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Peperoni, Paprika' },
  { id: 15, name: 'Toscana', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Pilze, Artischocken, Zwiebeln' },
  { id: 16, name: 'Tonno', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Thunfisch, Zwiebeln' },
  { id: 17, name: 'Frutti di Mare', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Meeresfrüchte⁴' },
  { id: 18, name: 'Calzone', sizes: [7.00, 8.00, 14.00], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Peperonisalami¹, Pilze' },
  { id: 19, name: 'Europa', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Peperonisalami¹, Pilze, Paprika' },
  { id: 20, name: 'Hawaii', sizes: [6.70, 7.70, 12.40], ingredients: 'Tomatensauce, Käse, Schinken², Ananas' },
  { id: 21, name: 'Inferno', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Schinken², Pilze, Spinat, Zwiebeln' },
  { id: 22, name: 'Vesuvio', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Artischocken, Oliven, Peperoni, Kapern' },
  { id: 23, name: 'Vegetaria', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Artischocken, Pilze, Spinat, Paprika, Oliven, Peperoni, Zwiebeln' },
  { id: 24, name: 'Gorgonzola', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Gorgonzola, Käse' },
  { id: 25, name: 'Hawaii Beach', sizes: [7.70, 8.70, 14.40], ingredients: 'Sahne, Käse, Schinken², Ananas' },
  { id: 26, name: 'Etna', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Spinat, Knoblauch, Peperoni (scharf)' },
  { id: 27, name: 'Stella', sizes: [7.70, 8.70, 14.40], ingredients: 'Sahne, Käse, Schinken², Pilze, Spinat' },
  { id: 28, name: 'Sole', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Peperonisalami¹, Paprika, Zwiebeln, Spiegelei' },
  { id: 29, name: 'Mozzarella', sizes: [6.50, 7.50, 12.00], ingredients: 'Tomatensauce, Mozzarella' },
  { id: 30, name: 'Broccoli', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Broccoli, Schinken², Peperonisalami¹' },
  { id: 31, name: 'Spezialchef', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Schinken², Pilze, Erbsen, Oliven, Ei' },
  { id: 32, name: 'Napoli', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Mozzarella, frische Tomaten, Peperonisalami¹, Broccoli' },
  { id: 33, name: 'Mista', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Paprika, Spinat, Zwiebeln, Oliven' },
  { id: 34, name: '4 Käse', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Gorgonzola, Mozzarella, Parmesan' },
  { id: 35, name: 'Ortolana', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Mozzarella, Broccoli, Pilze, Paprika' },
  { id: 36, name: 'Rustica', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Mozzarella, frische Tomaten, Peperonisalami¹, Broccoli' },
  { id: 37, name: 'Pazza', sizes: [7.70, 8.70, 14.40], ingredients: 'Sahne, Käse, Schinken², Pilze, Zwiebeln' },
  { id: 38, name: 'Venezia', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Gorgonzola, Broccoli, Knoblauch' },
  { id: 39, name: 'Albino', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Gorgonzola, Broccoli, Knoblauch, Schinken²' },
  { id: 40, name: 'Scaro', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Peperonisalami¹, Pilze, Ei, Thunfisch, Peperoni' },
  { id: 41, name: 'Salvo', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Käse, Salami¹, Schinken², Peperonisalami¹, Peperoni, Oliven, Knoblauch' },
  { id: 42, name: 'Gamberetti', sizes: [7.70, 8.70, 14.40], ingredients: 'Tomatensauce, Mozzarella, Shrimps, Knoblauch, Broccoli' },
  { id: 43, name: 'Pizzabrot alla Chef', sizes: [3.00], ingredients: '' },
]

const pastas = [
  { id: 'p1', name: 'Spaghetti Carbonara', price: 9.50, description: 'Spaghetti mit Speck, Ei, Käse und schwarzem Pfeffer' },
  { id: 'p2', name: 'Spaghetti Bolognese', price: 9.50, description: 'Spaghetti mit Fleischsauce' },
  { id: 'p3', name: 'Penne Arrabbiata', price: 9.50, description: 'Penne mit Tomaten, Knoblauch und Chili' },
  { id: 'p4', name: 'Lasagne al Forno', price: 10.00, description: 'Klassische Lasagne mit Ragù und Béchamel' },
  { id: 'p5', name: 'Ravioli Spinat', price: 9.50, description: 'Ravioli gefüllt mit Spinat und Ricotta' },
  { id: 'p6', name: 'Fettuccine Alfredo', price: 9.50, description: 'Fettuccine mit cremiger Sahnesauce und Parmesan' },
]

const salads = [
  { id: 's1', name: 'Salat Mista', price: 8.00, description: 'Gemischter Salat mit Essig und Öl' },
  { id: 's2', name: 'Salat Caprese', price: 9.00, description: 'Tomaten, Mozzarella, Basilikum, Essig und Öl' },
  { id: 's3', name: 'Salat Cesar', price: 9.00, description: 'Römersalat mit Hühnchen, Croutons, Parmesan und Cesar-Dressing' },
]

const desserts = [
  { id: 'd1', name: 'Tiramisu', price: 5.00, description: 'Klassisches italienisches Tiramisu mit Mascarpone und Kakao' },
  { id: 'd2', name: 'Panna Cotta', price: 5.00, description: 'Cremige Panna Cotta mit Früchten' },
  { id: 'd3', name: 'Zabaglione', price: 4.50, description: 'Leichte Cremespeise mit Marsala' },
]

const drinks = [
  { 
    id: 'dr-alkoholfrei', 
    category: 'Alkoholfrei (0,5l)',
    items: [
      { name: 'Coca Cola**', price: 2.50 },
      { name: 'Fanta**', price: 2.50 },
      { name: 'Sprite**', price: 2.50 },
      { name: 'Mezzo Mix**', price: 2.50 },
      { name: 'Wasser', price: 2.50 },
    ]
  },
  { 
    id: 'dr-bier', 
    category: 'Bier',
    items: [
      { name: 'Bitburger (0,33l)', price: 2.50 },
    ]
  },
  { 
    id: 'dr-wein', 
    category: 'Wein',
    items: [
      { name: 'Chianti (trocken, 0,75l)', price: 8.00 },
    ]
  },
]

export default function MenuSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null)

  return (
    <section id="menu" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 md:mb-16">Speisekarte</h2>

        {/* Pizzas */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">Pizzas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pizzas.map((pizza) => (
              <button
                key={pizza.id}
                onClick={() => setSelectedItem(pizza)}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-sm mb-3 group-hover:shadow-md transition-shadow">
                  <img
                    src={`/.jpg?height=300&width=300&query=${pizza.name} pizza top view`}
                    alt={pizza.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-light">
                    ⓘ
                  </div>
                </div>
                <h4 className="text-sm font-light mb-2 group-hover:text-primary transition-colors">{pizza.name}</h4>
                <p className="text-xs text-muted-foreground font-light">
                  {pizza.sizes[0]?.toFixed(2).replace('.', ',')} €
                  {pizza.sizes[1] ? ` / ${pizza.sizes[1].toFixed(2).replace('.', ',')} €` : ''}
                  {pizza.sizes[2] ? ` / ${pizza.sizes[2].toFixed(2).replace('.', ',')} €` : ''}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Pastas */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">Pasta</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastas.map((pasta) => (
              <button
                key={pasta.id}
                onClick={() => setSelectedItem(pasta)}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-sm mb-3 group-hover:shadow-md transition-shadow">
                  <img
                    src={`/.jpg?height=300&width=300&query=${pasta.name} pasta dish`}
                    alt={pasta.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem(pasta)
                    }}
                    className="absolute bottom-2 right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-light hover:bg-primary/90"
                  >
                    ⓘ
                  </button>
                </div>
                <h4 className="text-sm font-light mb-2 group-hover:text-primary transition-colors">{pasta.name}</h4>
                <p className="text-xs text-muted-foreground font-light">{pasta.price.toFixed(2).replace('.', ',')} €</p>
              </button>
            ))}
          </div>
        </div>

        {/* Salads */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">Salate</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {salads.map((salad) => (
              <button
                key={salad.id}
                onClick={() => setSelectedItem(salad)}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-sm mb-3 group-hover:shadow-md transition-shadow">
                  <img
                    src={`/.jpg?height=300&width=300&query=${salad.name} fresh salad`}
                    alt={salad.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem(salad)
                    }}
                    className="absolute bottom-2 right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-light hover:bg-primary/90"
                  >
                    ⓘ
                  </button>
                </div>
                <h4 className="text-sm font-light mb-2 group-hover:text-primary transition-colors">{salad.name}</h4>
                <p className="text-xs text-muted-foreground font-light">{salad.price.toFixed(2).replace('.', ',')} €</p>
              </button>
            ))}
          </div>
        </div>

        {/* Desserts */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">Desserts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {desserts.map((dessert) => (
              <button
                key={dessert.id}
                onClick={() => setSelectedItem(dessert)}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-sm mb-3 group-hover:shadow-md transition-shadow">
                  <img
                    src={`/.jpg?height=300&width=300&query=${dessert.name} dessert`}
                    alt={dessert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedItem(dessert)
                    }}
                    className="absolute bottom-2 right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-light hover:bg-primary/90"
                  >
                    ⓘ
                  </button>
                </div>
                <h4 className="text-sm font-light mb-2 group-hover:text-primary transition-colors">{dessert.name}</h4>
                <p className="text-xs text-muted-foreground font-light">{dessert.price.toFixed(2).replace('.', ',')} €</p>
              </button>
            ))}
          </div>
        </div>

        {/* Drinks */}
        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">Getränke</h3>
          <div className="space-y-8">
            {drinks.map((drinkCategory) => (
              <div key={drinkCategory.id}>
                {/* Category header */}
                <h4 className="text-sm font-semibold text-foreground mb-3">{drinkCategory.category}</h4>
                
                {/* Items in two-column layout */}
                <div className="space-y-2">
                  {drinkCategory.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-4 text-sm">
                      <span className="font-light text-foreground">{item.name}</span>
                      <span className="font-light text-foreground ml-auto">{item.price.toFixed(2).replace('.', ',')} €</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Zusatzstoffe notes */}
          <div className="mt-8 pt-6 border-t border-muted text-xs text-gray-500 space-y-2">
            <p><span className="font-semibold">Hinweise:</span></p>
            <p>* koffeinhaltig</p>
            <p>** farbstoffhaltig</p>
            <p>*** koffein- und farbstoffhaltig</p>
            
            <p className="pt-2"><span className="font-semibold">Zusatzstoffe unserer Pizzagerichte:</span></p>
            <p>(1) mit Konservierungsstoff und Zuckerstoff</p>
            <p>(2) mit Phosphat</p>
            <p>(3) geschwärzt, konserviert, Geschmacksverstärker und gekochter Form-Vorderschinken</p>
            <p>(4) mit Konservierungsstoff und Geschmacksverstärker</p>
          </div>
        </div>

        <div className="bg-[#FFF3E5] border border-[#F1C8A8] rounded-lg p-5 my-4">
          <div className="space-y-2 text-[11px] leading-tight text-[#666666]">
            <div>
              <h4 className="font-semibold text-[#666666] mb-1">Merkblatt</h4>
              <p className="text-[#666666]">Zur Kennzeichnung auf Speise- und Getränkekarten gemäß</p>
              <ul className="list-disc list-inside text-[#666666] ml-2 space-y-0.5">
                <li>Zusatzstoff-Zulassungsverordnung (ZZulVO) vom 29.01.1998</li>
                <li>Allergenkennzeichnung ab 13.12.2014</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#666666] mb-1">Zusatzstoffe:</h4>
              <ol className="list-decimal list-inside text-[#666666] space-y-0.5 ml-2">
                <li>mit Geschmacksverstärker</li>
                <li>mit Phosphat</li>
                <li>mit Antioxidationsmittel</li>
                <li>mit Konservierungsstoff</li>
                <li>mit Farbstoff</li>
                <li>mit Koffein</li>
                <li>mit Chinin</li>
                <li>mit Süßungsmittel</li>
                <li>mit Taurin</li>
                <li>geschwärzt</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-[#666666] mb-1">Allergene:</h4>
              <div className="text-[#666666] space-y-0.5 ml-2">
                <p><span className="font-semibold">a</span>. Glutenhaltiges Getreide, namentlich z.B. Weizen, Roggen, Hafer</p>
                <p><span className="font-semibold">b</span>. Krebstiere und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">c</span>. Eier und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">d</span>. Fische und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">e</span>. Erdnüsse und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">f</span>. Sojabohnen und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">g</span>. Milch und daraus gewonnene Erzeugnisse (einschl. Laktose)</p>
                <p><span className="font-semibold">h</span>. Schalenfrüchte, namentlich z.B. Haselnüsse, Walnüsse usw.</p>
                <p><span className="font-semibold">i</span>. Sellerie und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">j</span>. Senf und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">k</span>. Sesamsamem und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">l</span>. Schwefeldioxid und Sulfite {'>'}10mg/kg oder 10mg/l</p>
                <p><span className="font-semibold">m</span>. Lupinen und daraus gewonnene Erzeugnisse</p>
                <p><span className="font-semibold">n</span>. Weichtiere und daraus gewonnene Erzeugnisse</p>
              </div>
            </div>

            <div className="border-t border-[#F1C8A8] pt-1 mt-1">
              <p className="font-semibold text-[#666666] mb-0.5">Hinweise zu den Inhaltsstoffen unserer Pizzageichte:</p>
              <ol className="list-decimal list-inside text-[#666666] space-y-0.5 ml-2">
                <li>mit Konservierungsstoff und Zuckerstoff</li>
                <li>mit Phosphat</li>
                <li>geschwärzt, konserviert, Geschmacksverstärker und gekochter Form-Vorderschinken</li>
                <li>mit Konservierungsstoff und Geschmacksverstärker</li>
              </ol>
            </div>
          </div>
        </div>

        {selectedItem && <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </div>
    </section>
  )
}
