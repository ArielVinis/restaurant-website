import { Navbar } from "@/src/components/navbar"
import { Hero } from "@/src/components/hero"
import { About } from "@/src/components/about"
import { Menu } from "@/src/components/menu"
import { Reservation } from "@/src/components/reservation"
import { Gallery } from "@/src/components/gallery"
import { Contact } from "@/src/components/contact"
import { Footer } from "@/src/components/footer"
import { Testimonials } from "@/src/components/testimonials"
import { Chefs } from "@/src/components/chefs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Chefs />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
