import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import Socials from './Socials'

export default function AboutMe() {
  return (
    <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
      <div className='space-y-12 md:grid md:grid-cols-3 md:gap-8 md:space-y-0'>
        <div className='space-y-2 sm:space-y-4 md:col-span-3 md:max-w-2xl'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            About Me
          </h2>
          <p className='text-xl text-gray-500 leading-relaxed'>
            I'm a Full Stack Developer based in the San Francisco Bay Area. I
            love cats, enjoy running, building web applications and learning new
            technologies. I have experience with modern frontend frameworks,
            server-side rendering, search-engine optimization, database schemas,
            user authentication, and more.
          </p>

          <p className='text-xl text-gray-500 leading-relaxed'>
            I'm happy to connect and collaborate with others. If you're
            interested in working with me, please reach out!
          </p>
        </div>

        <div className='space-y-2 sm:space-y-4 md:col-span-1'>
          <Image
            className='shadow-lg rounded-lg'
            width={300}
            height={300}
            src='/images/headshots/me.jpg'
            alt='Jeff Hogg headshot'
          />
        </div>

        <div className='md:col-span-2 space-y-4'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Skills
          </h2>

          <div className='text-lg leading-6 font-medium space-y-1'>
            <h3>Languages:</h3>
            <p className='text-indigo-600'>JavaScript, TypeScript, Python</p>

            <h3>Libraries:</h3>
            <p className='text-indigo-600'>React, Nextjs, Node.js, Express</p>

            <h3>Databases:</h3>
            <p className='text-indigo-600'>MongoDB, PostgreSQL, MySQL</p>

            <h3>Tools:</h3>
            <p className='text-indigo-600'>Git, GitHub, Jest, Postman</p>

            <h3>Other:</h3>
            <p className='text-indigo-600'>Docker, Kubernetes, AWS, Heroku</p>
          </div>
        </div>

        <div className='md:col-span-4'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl lg:my-4'>
            Contact
          </h2>
          <p className='text-xl text-gray-500 leading-relaxed'>
            Let's connect on Social Media!
          </p>
          <Socials />
          <p className='text-xl text-gray-500 leading-relaxed mt-6 lg:mt-8 mb-8'>
            Send me a message using the form below.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
