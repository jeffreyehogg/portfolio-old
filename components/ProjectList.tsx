import Image from 'next/image'

const projects = [
	{
		title: 'Southern Rental Cars',
		href: 'https://southernrentalcars.com/',
		description:
			'A full stack web app built with Next.js, TailwindCSS, and Prisma. Pending a booking system, admin dashboard, and user authentication.',
		imageUrl: '/images/southern.png',
		tags: ['Next.js', 'Prisma', 'TailwindCSS'], // Added tags
	},
	{
		title: 'Texas Tint',
		href: 'https://texastint.com/',
		description:
			'A static website built with Next.js and TailwindCSS. Features a contact form and a gallery of previous work.',
		imageUrl: '/images/texas-tint.png',
		tags: ['Next.js', 'TailwindCSS'], // Added tags
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
				<div className='mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none items-stretch'>
					{projects.map((post) => (
						<div
							key={post.title}
							className='group flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105'
						>
							<div className='shrink-0 overflow-hidden'>
								<Image
									className='h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
									width={400}
									height={200}
									src={post.imageUrl}
									alt={`Screenshot of the ${post.title} project`}
								/>
							</div>
							<div className='flex-1 bg-white p-6 flex flex-col justify-between'>
								<div className='flex-1'>
									<div className='flex space-x-2'>
										{post.tags.map((tag) => (
											<span
												key={tag}
												className='inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700'
											>
												{tag}
											</span>
										))}
									</div>
									<p className='text-xl font-semibold text-gray-900 mt-4'>
										{post.title}
									</p>
									<p className='mt-3 text-base text-gray-500'>
										{post.description}
									</p>
								</div>

								<div className='mt-6 flex space-x-4'>
									<a
										href={post.href}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm text-white bg-indigo-700  hover:bg-opacity-70 transition ease-in-out duration-150'
									>
										View Live
									</a>
									{/* <a
                    href="#" // Add GitHub link here
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    View Code
                  </a> */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
