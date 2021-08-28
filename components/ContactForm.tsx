export default function ContactForm() {
  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='relative bg-white rounded-md shadow-xl'>
          <h2 className='sr-only'>Contact Me</h2>

          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {/* Contact information */}
            <div className='py-10 px-6 bg-space sm:px-10 xl:p-12'>
              <h2 className='text-3xl  text-gray-900'></h2>
              <h2 className='text-3xl sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl font-medium font-extrabold text-white'>
                Let's chat
              </h2>
              <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
                I am always happy to share my knowledge and experience. Feel
                free to reach out. <br />
                <br />
                Connect with me on LinkedIn, GitHub, Twitter, or YouTube.
              </p>

              <ul role='list' className='mt-8 flex space-x-12'>
                <li>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href='https://www.linkedin.com/in/jeffhogg/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href='https://github.com/jeffhogg86'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='sr-only'>GitHub</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        d='M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href='https://twitter.com/JeffeHogg'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='sr-only'>Twitter</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        d='M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href='https://www.youtube.com/c/HoggMedia'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='sr-only'>YouTube</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      aria-hidden='true'
                    >
                      <path
                        d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
              <h3 className='text-lg font-medium text-gray-900'>
                Send me a message
              </h3>
              <form
                action='#'
                method='POST'
                className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              >
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-900'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Phone
                    </label>
                    <span id='phone-optional' className='text-sm text-gray-500'>
                      Optional
                    </span>
                  </div>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                      aria-describedby='phone-optional'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Subject
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Message
                    </label>
                    <span id='message-max' className='text-sm text-gray-500'>
                      Max. 500 characters
                    </span>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                      aria-describedby='message-max'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2 sm:flex sm:justify-end'>
                  <button
                    type='submit'
                    className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
