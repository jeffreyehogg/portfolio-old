import { useRouter } from 'next/router'
import ReactPlayer from 'react-player/lazy'
import { defaultVid } from '../lib/videoConstants'

export default function VideoPlayer() {
  const router = useRouter()
  const { id } = router.query

  const vidUrl = `https://www.youtube.com/watch?v=${id ? id : defaultVid}`
  return (
    <>
      <div className='flex mt-4 mb-4 justify-center mx-auto md:hidden'>
        <ReactPlayer
          width='320px'
          height='180px'
          controls={true}
          url={vidUrl}
        />
      </div>
      <div className='hidden lg:flex justify-center mx-auto mt-10 mb-8'>
        <ReactPlayer
          width='960px'
          height='540px'
          controls={true}
          url={vidUrl}
        />
      </div>
      <div className='hidden md:flex lg:hidden justify-center mx-auto mt-10 mb-8'>
        <ReactPlayer controls={true} url={vidUrl} />
      </div>
    </>
  )
}
