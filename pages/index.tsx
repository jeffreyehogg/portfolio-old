import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <Layout title='Jeff Hogg'>
      <Hero />
      <Pricing />
    </Layout>
  )
}
