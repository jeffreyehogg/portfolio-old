import Image from 'next/image'

const Trusted = () => {
  return (
    <div className='bg-white pt-12 sm:pt-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Trusted by companies all over the world
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Just a few of the companies I've worked with.
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <Image
              width={200}
              height={100}
              src='/images/logos/cisco.png'
              alt='Cisco'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <Image
              width={170}
              height={100}
              src='/images/logos/49ers.png'
              alt='San Francisco 49ers'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <Image
              width={200}
              height={100}
              src='/images/logos/giants.png'
              alt='San Francisco Giants'
            />
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <Image
              width={90}
              height={100}
              src='/images/logos/warriors.png'
              alt='Golden State Warriors'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted
