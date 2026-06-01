import {
  Navbar,
  Hero,
  Stats,
  Areas,
  About,
  WhyUs,
  Testimonials,
  HowItWorks,
  CTA,
  Footer,
  WhatsAppFloat,
} from './components'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Areas />
        <About />
        <WhyUs />
        <Testimonials />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
