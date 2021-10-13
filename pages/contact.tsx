import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import Layout from '../components/Layout'

function contact() {
  return (
    <Layout title='Contact'>
      <div className='bg-gray-100 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='relative bg-white rounded-md shadow-xl'>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
