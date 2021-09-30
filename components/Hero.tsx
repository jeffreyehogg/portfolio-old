import Typist from './Typist'

export default function Hero() {
  return (
    <div>
      {/* Hero card */}
      <div className='relative shadow-xl sm:overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            className='h-full w-full object-cover'
            src='/images/space.jpg'
            alt='space'
          />
        </div>
        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
          <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
            <span className='block text-white'>Hi, I'm Jeff</span>
            <span className='block text-white'>
              <Typist />
            </span>
          </h1>
          <p className='mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl'>
            Check out my portfolio and
            <br />
            development services below.
          </p>
          <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
            <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
              <a
                href='/portfolio'
                className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700  hover:bg-opacity-70 sm:px-8'
              >
                Portfolio
              </a>
              <a
                href='/contact'
                className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
