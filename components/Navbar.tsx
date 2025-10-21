import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'
import { githubUrl, linkedInUrl, twitterUrl } from '../lib/constants'
import { useRouter } from 'next/router'

const navigation = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Portfolio', href: '/portfolio', current: false },
	// TODO: Fix Videos page
	// { name: 'Videos', href: '/videos', current: false },
	{ name: 'About', href: '/about', current: false },
]

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
	const router = useRouter()

	return (
		<Disclosure as='nav' className='bg-space top-0'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => {
											const isCurrent = router.pathname === item.href

											return (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														isCurrent
															? 'bg-gray-900 text-white'
															: 'text-gray-300 hover:bg-gray-700 hover:text-white',
														'px-3 py-2 rounded-md text-sm font-medium'
													)}
													aria-current={isCurrent ? 'page' : undefined}
												>
													{item.name}
												</a>
											)
										})}
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								{/* Profile dropdown */}
								<Menu as='div' className='ml-3 relative'>
									{({ open }) => (
										<>
											{/* --- Updated Button --- */}
											<Menu.Button
												className={classNames(
													'relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800',
													'h-10 w-10', // Explicitly set height and width
													'items-center justify-center', // Center content
													'transition-opacity hover:opacity-90 focus:opacity-90' // Add hover/focus state
												)}
											>
												<span className='absolute -inset-1.5' />
												<span className='sr-only'>Open user menu</span>
												<Avatar />
											</Menu.Button>
											{/* --- End Updated Button --- */}
											<Transition
												show={open}
												as={Fragment}
												enter='transition ease-out duration-100'
												enterFrom='transform opacity-0 scale-95'
												enterTo='transform opacity-100 scale-100'
												leave='transition ease-in duration-75'
												leaveFrom='transform opacity-100 scale-100'
												leaveTo='transform opacity-0 scale-95'
											>
												<Menu.Items
													static
													className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
												>
													<Menu.Item>
														{({ active }) => (
															<a
																href={linkedInUrl}
																target='_blank'
																rel='noreferrer'
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																LinkedIn
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href={githubUrl}
																target='_blank'
																rel='noreferrer'
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																Github
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href={twitterUrl}
																target='_blank'
																rel='noreferrer'
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																Twitter
															</a>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</>
									)}
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{navigation.map((item) => {
								const isCurrent = router.pathname === item.href
								return (
									<Disclosure.Button
										key={item.name}
										as='a'
										href={item.href}
										className={classNames(
											isCurrent
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={isCurrent ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								)
							})}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
