import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='Jeff Hogg'>
      <main>
        <Hero />
      </main>
    </Layout>
  )
}
