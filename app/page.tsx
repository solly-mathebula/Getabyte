import Hero from './components/Hero'
import Partners from './components/Partners'
import Transformation from './components/transformation'
import CareerInsights from './components/careerinsight'
import Services from './components/Services'
import Industries from './components/Industries'
import ContactUs from './components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Transformation/>
      <Industries/>
      <CareerInsights/>
      <Services/>
      <Partners/>
      <ContactUs/>
    </>
  )
}
