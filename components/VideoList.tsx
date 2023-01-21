import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const VideosList = ({ data }: any) => {
  return (
    <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-4 mb-8 shadow-2xl bg-white rounded-2xl'>
      <h2 className='text-2xl p-5 font-bold '>Latest Videos:</h2>
      <ul
        role='list'
        className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
      >
        {data.items.map((item) => {
          const { id, snippet = {} } = item
          const { thumbnails = {}, resourceId, title } = snippet

          return (
            <div key={id} className='mt-2'>
              <Link
                href={{
                  pathname: '/videos/[id]',
                  query: { id: `${resourceId.videoId}` },
                }}
              >
                <Image
                  className='cursor-pointer'
                  src={thumbnails.maxres.url}
                  height={thumbnails.maxres.height}
                  width={thumbnails.maxres.width}
                  alt={title}
                />
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default VideosList
