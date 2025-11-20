import Header from '@/components/header'
import Hero from '@/components/hero'
import Benefits from '@/components/benefits'
import MenuSection from '@/components/menu-section'
import AboutSection from '@/components/about-section'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <MenuSection />
      <AboutSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
