const projects = [
  {
    title: 'CardShop',
    href: 'https://cardshop.vercel.app',
    description:
      'An online marketplace for sportscards. Built with Next.js and Redux. When complete, user will be able to create an account, add items to shopping cart and checkout with PayPal.',

    imageUrl: '/images/cardshop.png',
  },
  {
    title: 'Hogg Media',
    href: 'https://hoggmedia.com/',
    description:
      'A static blog/vlog site built with Next.js. Uses Next.js, Server-Side Rendering, TailwindCSS, YouTube API, Markdown.',

    imageUrl: '/images/hoggmedia.png',
  },
  {
    title: 'Iron Dojo',
    href: 'https://the-iron-dojo.herokuapp.com/',
    description:
      'A react based web application built to track your strength and conditioning sessions over time. Create and log your workouts, then view your progress displayed in a chart.',

    imageUrl: '/images/ironDojo-ss.png',
  },

  {
    title: 'Chatter',
    href: 'https://discord-47ed9.web.app/',
    description:
      'A Discord style chat app built with react. Demonstrates basic chat functionality, creating a channel and sending messages. Implements Google Oauth for login.',

    imageUrl: '/images/chatter.png',
  },
  {
    title: 'Shoflix',
    href: 'https://netflix-clone-23b92.web.app/',
    description:
      "A Netflix style video previewer. Makes an API call to render movies and shows by category. Some of the movie/show's play a trailer on a click. Deployed with firebase.",

    imageUrl: '/images/shoflix.png',
  },
  {
    title: 'Hoggle Search',
    href: 'https://hoggle-search.vercel.app/',
    description:
      'A Google type search engine built with Next.js, Tailwind and the Google Search Api. Deployed with vercel.',

    imageUrl: '/images/hoggle.png',
  },
]

export default function ProjectList() {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Projects
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Check out some of the applications and websites I have built below.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {projects.map((post) => (
            <div
              key={post.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transition duration-150 transform hover:scale-110'
            >
              <div className='flex-shrink-0'>
                <a href={post.href} target='_blank' rel='noreferrer'>
                  <img
                    className='h-48 w-full object-cover'
                    src={post.imageUrl}
                    alt=''
                  />
                </a>
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'></p>
                  <a
                    href={post.href}
                    target='_blank'
                    rel='noreferrer'
                    className='block mt-2'
                  >
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post.description}
                    </p>
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
