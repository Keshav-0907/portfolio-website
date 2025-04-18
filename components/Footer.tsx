import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='contact' className='p-3 font-inika'>
      <div className="text-2xl font-semibold"> ~ {"Let's"} Connect </div>
      <div className='flex justify-between py-5'>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            About Me
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className='font-medium'>✉️ Email</span>
              <Link href={'mailto://kmalik0907@gmail.com'} className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> kmalik0907@gmail.com </Link>
            </div>
            <div className='flex flex-col'>
              <span className='font-bold'>📄 Resume </span>
              <Link href={'https://drive.google.com/file/d/169LXQt_jzHVD86Y6SqayyA5W7dOZUD8V/view?usp=sharing'} target='_blank' className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> Download Resume </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            Code
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className='font-medium'> 💻 Github</span>
              <Link href={'https://github.com/Keshav-0907'} target='_blank' className='text-[#7d7474] hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2 md:text-base text-xs'> @keshav-0907 </Link>
            </div>

          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-lg font-semibold'>
            Social Media
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-col'>
              <span className=' font-medium'>📱 LinkedIn</span>
              <Link href={'https://www.linkedin.com/in/keshavmalik'} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @keshav-malik </Link>
            </div>
            <div className='flex flex-col'>
              <span className=' font-bold'>🐦 Twitter </span>
              <Link href={'https://twitter.com/_keshav_malik'} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @_keshav_malik </Link>
            </div>
            <div className='flex flex-col'>
              <span className=' font-medium'> 📸 Instagram </span>
              <Link href={'https://www.instagram.com/_keshav_malik'} target='_blank' className='text-[#7d7474] md:text-base text-xs hover:text-[#a19595] cursor-pointer hover:underline underline-offset-2'> @_keshav_malik </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer