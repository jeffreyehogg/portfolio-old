import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <Layout title='Jeff Hogg'>
      <Hero />
      <Testimonials />
      <Services />
    </Layout>
  )
}
