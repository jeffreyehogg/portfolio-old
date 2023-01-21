import Image from 'next/image'

const Testimonials = () => {
  const testimonies = [
    {
      name: 'Elon Musk',
      company: 'Space X',
      testimonial:
        'Jeff is pretty cool, I would hire him in a heartbeat if I ever have the chance',
      image: '/images/headshots/elonmusk.jpeg',
    },
    {
      name: 'Tim Cook',
      company: 'Apple',
      testimonial:
        'Wow, he is amazing! His attention to detail nearly took my breath away',
      image: '/images/headshots/timcook.png',
    },
    {
      name: 'Chuck Robbins',
      company: 'Cisco',
      testimonial:
        'He is a great developer, he is a great team player. I am so proud of him',
      image: '/images/headshots/chuckrobbins.jpeg',
    },
  ]

  return (
    <div>
      <section className='py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative'>
            <h2 className='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
              What people might be saying...
            </h2>
            <p className='mt-3 text-xl text-gray-500 sm:mt-4'>(Probably) </p>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-3  gap-8'>
              {testimonies.map((testimony) => (
                <div
                  key={testimony.name}
                  className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden p-5'
                >
                  <blockquote className='mt-10'>
                    <div className='max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900'>
                      <p>&ldquo;{testimony.testimonial}&rdquo;</p>
                    </div>
                    <footer className='mt-8'>
                      <div className='flex items-center justify-center'>
                        <div className='md:shrink-0'>
                          <Image
                            className='mx-auto rounded-full'
                            src={testimony.image}
                            alt={testimony.name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className='mt-3 text-center md:mt-0 md:ml-4 md:items-center'>
                          <div className='text-base font-medium text-gray-900'>
                            {testimony.name}
                          </div>

                          <div className='text-base font-medium text-gray-500'>
                            CEO, {testimony.company}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
