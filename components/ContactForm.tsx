import { useRef, useState, FormEvent } from 'react'
import { sendForm } from '@emailjs/browser'
import Recaptcha from 'react-recaptcha'
import MessageSent from './MessageSent' // Import your existing component
import { XCircleIcon } from '@heroicons/react/24/solid' // For the error message

// Define an initial state for the form data
const initialFormData = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	subject: '',
	message: '',
}

export default function ContactForm() {
	const [formData, setFormData] = useState(initialFormData)
	const [recaptchaLoad, setRecaptchaLoad] = useState(false)
	const [isVerified, setIsVerified] = useState(false)
	const [status, setStatus] = useState<
		'idle' | 'sending' | 'success' | 'error'
	>('idle')
	const [errorMessage, setErrorMessage] = useState('')

	const form = useRef<HTMLFormElement>(null)

	const recaptchaLoaded = () => {
		setRecaptchaLoad(true)
	}

	const verifiedRecaptcha = (response: string) => {
		if (response) {
			setIsVerified(true)
		}
	}

	// Handle input changes for all fields
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (!isVerified || !recaptchaLoad) {
			setErrorMessage('Please verify you are not a robot.')
			setStatus('error')
			return
		}

		if (!form.current) return

		setStatus('sending')
		setErrorMessage('')

		try {
			await sendForm(
				'jeffehogg',
				'contact_form',
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
			)
			setStatus('success')
			setFormData(initialFormData) // Reset form on success
			// Note: reCAPTCHA will need to be checked again by the user automatically
			setIsVerified(false)
		} catch (error) {
			console.error('EmailJS Error:', error)
			setErrorMessage('Something went wrong, please try again.')
			setStatus('error')
		}
	}

	return (
		<div className='md:shadow-lg md:rounded-lg md:p-8 md:m-4 max-w-4xl mx-auto px-4'>
			<form
				ref={form}
				onSubmit={handleSubmit} // Use onSubmit on the form
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
							value={formData.firstName}
							onChange={handleChange}
							id='firstName'
							autoComplete='given-name'
							required // Add browser validation
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
							value={formData.lastName}
							onChange={handleChange}
							id='lastName'
							autoComplete='family-name'
							required // Add browser validation
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
							value={formData.email}
							onChange={handleChange}
							type='email' // Use email type for browser validation
							autoComplete='email'
							required // Add browser validation
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
							value={formData.phone}
							onChange={handleChange}
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
							value={formData.subject}
							onChange={handleChange}
							id='subject'
							required // Add browser validation
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
							value={formData.message}
							onChange={handleChange}
							rows={4}
							required // Add browser validation
							maxLength={500} // Enforce character limit
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

				{/* --- STATUS MESSAGES --- */}
				<div className='col-span-1 sm:col-span-2'>
					{status === 'success' && <MessageSent />}
					{status === 'error' && (
						<div className='rounded-md bg-red-50 p-4'>
							<div className='flex'>
								<div className='shrink-0'>
									<XCircleIcon
										className='h-5 w-5 text-red-400'
										aria-hidden='true'
									/>
								</div>
								<div className='ml-3'>
									<p className='text-sm font-medium text-red-800'>
										{errorMessage}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* --- END STATUS MESSAGES --- */}

				<div className='col-span-1 md:col-span-2'>
					<button
						type='submit'
						disabled={status === 'sending'} // Disable button when sending
						className='mt-2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto disabled:bg-gray-400'
					>
						{status === 'sending' ? 'Submitting...' : 'Submit'}
					</button>
				</div>
			</form>
		</div>
	)
}
