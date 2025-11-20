'use client'

import { useEffect } from 'react'

interface MenuItem {
  name?: string
  category?: string
  sizes?: number[]
  ingredients?: string
  price?: number
  description?: string
  items?: string
}

interface MenuModalProps {
  item: MenuItem
  onClose: () => void
}

export default function MenuModal({ item, onClose }: MenuModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const isPizza = item.sizes && item.sizes.length > 0
  const isDrink = item.items !== undefined
  const isOtherDish = item.price !== undefined && !isDrink

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-card rounded-2xl shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 flex justify-end p-4 border-b border-border bg-card/95 backdrop-blur">
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-light mb-2">{item.name || item.category}</h3>

          {/* Pizza Modal */}
          {isPizza && (
            <>
              <p className="text-sm text-muted-foreground font-light mb-6">Größen & Preise</p>

              {/* Sizes & Prices */}
              <div className="space-y-3 mb-8 pb-8 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light">24cm</span>
                  <span className="text-sm font-light text-primary">{item.sizes[0].toFixed(2).replace('.', ',')} €</span>
                </div>
                {item.sizes[1] && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-light">28cm</span>
                    <span className="text-sm font-light text-primary">{item.sizes[1].toFixed(2).replace('.', ',')} €</span>
                  </div>
                )}
                {item.sizes[2] && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-light">36cm</span>
                    <span className="text-sm font-light text-primary">{item.sizes[2].toFixed(2).replace('.', ',')} €</span>
                  </div>
                )}
              </div>

              {/* Ingredients */}
              {item.ingredients && (
                <div>
                  <p className="text-sm font-light mb-3 text-muted-foreground">Zutaten</p>
                  <p className="text-sm font-light leading-relaxed">{item.ingredients}</p>
                </div>
              )}
            </>
          )}

          {/* Other Dishes Modal (Pasta, Salads, Desserts) */}
          {isOtherDish && !isDrink && (
            <>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground font-light mb-2">Preis</p>
                <p className="text-lg font-light text-primary">{item.price.toFixed(2).replace('.', ',')} €</p>
              </div>

              {/* Description & Ingredients */}
              {item.description && (
                <div>
                  <p className="text-sm font-light mb-3 text-muted-foreground">Beschreibung & Zutaten</p>
                  <p className="text-sm font-light leading-relaxed">{item.description}</p>
                </div>
              )}
            </>
          )}

          {/* Drinks Modal */}
          {isDrink && (
            <>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground font-light mb-2">Preis</p>
                <p className="text-lg font-light text-primary">{item.price.toFixed(2).replace('.', ',')} €</p>
              </div>

              {/* Drink Items */}
              {item.items && (
                <div>
                  <p className="text-sm font-light mb-3 text-muted-foreground">Beschreibung & Zutaten</p>
                  <p className="text-sm font-light leading-relaxed">{item.items}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
