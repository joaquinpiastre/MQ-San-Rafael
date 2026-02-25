import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}


