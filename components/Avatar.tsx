import Image from 'next/image'
import headshot from '../public/images/headshots/me.jpg'

function Avatar() {
  return (
    <Image
      className='rounded-full cursor-pointer'
      loading='eager'
      width={60}
      height={60}
      src={headshot}
      alt='profile pic'
    />
  )
}

export default Avatar
