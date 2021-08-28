/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Standard Website',
      price: 249,
      description:
        'The essentials for your business. Choose this option if your data does not change very often.',
      features: ['Static data', '2 revisions', 'Satisfaction guaranteed'],
      cta: 'Standard',
      mostPopular: false,
    },
    {
      title: 'Dynamic Website',
      price: 499,
      description:
        'A step-up from the Standard. Choose this option if you have dynamic data that changes.',
      features: [
        'Static + Dynamic Data',
        '3 revisions',
        'Website analytics',
        'Satisfaction guaranteed',
      ],
      cta: 'Dynamic',
      mostPopular: true,
    },
    {
      title: 'Premium Website',
      price: 999,
      description:
        'The premium option for your business. Choose this option if you need a database and user authentication',
      features: [
        'Static + Dynamic Data',
        'Database + User Authentication',
        'Unlimited revisions',
        'Advanced analytics',
        'Satisfaction guaranteed',
      ],
      cta: 'Premuim',
      mostPopular: false,
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className='max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl'>
        Web Development Services
      </h2>
      <p className='mt-6 max-w-2xl text-xl text-gray-500'>
        Choose a website option that fits your business needs.
      </p>

      {/* Tiers */}
      <div className='mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className='relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col'
          >
            <div className='flex-1'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className='absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2'>
                  Most popular
                </p>
              ) : null}
              <p className='mt-4 flex items-baseline text-gray-900'>
                <span className='text-5xl font-extrabold tracking-tight'>
                  ${tier.price}
                </span>
              </p>
              <p className='mt-6 text-gray-500'>{tier.description}</p>

              {/* Feature list */}
              <ul role='list' className='mt-6 space-y-6'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex'>
                    <CheckIcon
                      className='flex-shrink-0 w-6 h-6 text-indigo-500'
                      aria-hidden='true'
                    />
                    <span className='ml-3 text-gray-500'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href='#'
              className={classNames(
                tier.mostPopular
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
