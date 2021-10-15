import Image from 'next/image'

function Avatar() {
  return (
    <Image
      className='rounded-full cursor-pointer'
      width={40}
      height={40}
      loading='lazy'
      src='/images/headshots/me.jpg'
      alt='profile pic'
    />
  )
}

export default Avatar
