import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout title='404'>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-36'>
          <div className='text-center'>
            <p className='text-sm font-semibold text-indigo-400 uppercase tracking-wide'>
              404 error
            </p>
            <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
              Page not found.
            </h1>
            <p className='mt-2 text-base text-gray-500'>
              Sorry, the page you’re looking for could not be found.
            </p>
            <div className='mt-6'>
              <a
                href='/'
                className='text-base font-medium text-indigo-400 hover:text-indigo-500'
              >
                Go back home<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default NotFound
