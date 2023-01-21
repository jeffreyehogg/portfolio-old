import Image from 'next/image'

const projects = [
  {
    title: 'CardShop',
    href: 'https://cardshop.vercel.app',
    description:
      'An online marketplace for sportscards. Built with Next.js and Redux. When complete, user will be able to create an account, add items to shopping cart and checkout with PayPal.',

    imageUrl: '/images/cardshop.png',
    githubUrl: 'https://github.com/jeffehogg/cardshop',
  },
  {
    title: 'Iron Dojo',
    href: 'https://the-iron-dojo.herokuapp.com/',
    description:
      '(Initial load is slow) A react web application built to track your strength and conditioning over time. Create and log your workouts, view your progress in a chart.',

    imageUrl: '/images/ironDojo-ss.png',
    githubUrl: 'https://github.com/jeffehogg/Iron-Dojo',
  },
  {
    title: 'Hogg Media',
    href: 'https://hoggmedia.com/',
    description:
      'A static blog/vlog site built with Next.js. Uses Next.js, Server-Side Rendering, TailwindCSS, YouTube API, Markdown.',

    imageUrl: '/images/hoggmedia.png',
    githubUrl: 'https://github.com/jeffehogg/hoggmedia',
  },

  {
    title: 'Chatter',
    href: 'https://discord-47ed9.web.app/',
    description:
      'A Discord style chat app built with react. Demonstrates basic chat functionality, creating a channel and sending messages. Implements Google Oauth for login.',

    imageUrl: '/images/chatter.png',
    githubUrl: 'https://github.com/jeffehogg/chatter',
  },
  {
    title: 'Shoflix',
    href: 'https://netflix-clone-23b92.web.app/',
    description:
      "A Netflix style video previewer. Makes an API call to render movies and shows by category. Some of the movie/show's play a trailer on a click. Deployed with firebase.",

    imageUrl: '/images/shoflix.png',
    githubUrl: 'https://github.com/jeffehogg/shoflix',
  },
  {
    title: 'Hoggle Search',
    href: 'https://hoggle-search.vercel.app/',
    description:
      'A Google type search engine built with Next.js, Tailwind and the Google Search Api. Deployed with vercel.',

    imageUrl: '/images/hoggle.png',
    githubUrl: 'https://github.com/jeffehogg/hoggle-search',
  },
]

export default function ProjectList() {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl'>
          Portfolio
        </h2>
        <p className='mt-6 max-w-2xl text-xl text-gray-500'>
          Check out some projects I've worked on.
        </p>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {projects.map((post) => (
            <div
              key={post.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden'
            >
              <div className='shrink-0'>
                <Image
                  className='h-48 w-full object-cover'
                  width={400}
                  height={200}
                  src={post.imageUrl}
                  alt='Project screenshot'
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <p className='text-sm font-medium text-indigo-600'></p>
                <p className='text-xl font-semibold text-gray-900'>
                  {post.title}
                </p>
                <p className='mt-3 text-base text-gray-500'>
                  {post.description}
                </p>

                <div className='mt-6 flex space-x-4'>
                  <a
                    href={post.href}
                    target='_blank'
                    className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-indigo-700  hover:bg-opacity-70 transition ease-in-out duration-150 ml-2'
                  >
                    View Live
                  </a>
                  <a
                    href={post.githubUrl}
                    target='_blank'
                    className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-indigo-700  hover:bg-opacity-70 transition ease-in-out duration-150'
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
