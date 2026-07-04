import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Ticker } from "@/components/Ticker"
import { Products } from "@/components/Products"
import { HowItWorks } from "@/components/HowItWorks"
import { Manifesto } from "@/components/Manifesto"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { SeedField } from "@/components/SeedField"
import { ScrollProgress } from "@/components/ScrollProgress"

export default function App() {
  return (
    <div className="grain relative min-h-svh">
      <SeedField />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Ticker />
        <Products />
        <HowItWorks />
        <Manifesto />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
