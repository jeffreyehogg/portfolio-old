import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Trusted from '../components/Trusted'

export default function Home() {
  return (
    <Layout title='Jeff Hogg'>
      <Hero />
      <Trusted />
      <Testimonials />
      <Services />
    </Layout>
  )
}
