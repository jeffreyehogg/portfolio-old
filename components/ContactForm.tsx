import { useRef, useState } from 'react'
import { sendForm } from '@emailjs/browser'
import Recaptcha from 'react-recaptcha'

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [recaptchaLoad, setRecaptchaLoad] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const recaptchaLoaded = () => {
    setRecaptchaLoad(true)
  }

  const verifiedRecaptcha = (response) => {
    if (response) {
      setIsVerified(true)
    }
  }

  const form = useRef()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isVerified && recaptchaLoad) {
      sendForm(
        'jeffehogg',
        'contact_form',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      ).then(
        () => {
          alert('Your message has been sent!')
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhone('')
          setSubject('')
          setMessage('')
        },
        () => {
          alert('Something went wrong, please try again.')
        }
      )
    } else {
      alert('Please verify you are not a robot.')
    }
  }

  return (
    <div className='md:shadow-lg md:rounded-lg md:p-8 md:m-4 max-w-4xl mx-auto px-4'>
      <form
        ref={form}
        className='md:m-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
      >
        <div>
          <label
            htmlFor='firstName'
            className='block text-sm font-medium text-gray-900'
          >
            First name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              id='firstName'
              autoComplete='given-name'
              className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='block text-sm font-medium text-gray-900'
          >
            Last name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              id='lastName'
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
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
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
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
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
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
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              rows={4}
              className='py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
              aria-describedby='message-max'
            />
          </div>
        </div>
        <div className='overflow-hidden'>
          <Recaptcha
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            render='explicit'
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifiedRecaptcha}
          />
        </div>
        <div className='col-span-1 md:col-span-2'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='mt-2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
