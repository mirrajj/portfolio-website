import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
