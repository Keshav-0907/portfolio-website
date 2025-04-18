import Image from 'next/image'
import React from 'react'
import Badge from '../atoms/Badge'
import About from './About'

const socials = [
    {
        title: 'Github',
        url: 'abcd.com',
    },
    {
        title: 'Linkedin',
        url: 'abcd.com',
    },
]

const Hero = () => {
    return (
        <div className='text-base pt-8 pb-4 flex gap-4 flex-col'>
            <div className='flex items-center gap-4'>
                <Image src={'/keshav.png'} alt='keshav' width={60} height={60} className='rounded-sm hover:grayscale-100 transition-all duration-300 cursor-pointer' />
                <div className='flex flex-col'>
                    <div className='text-lg font-semibold'> Hi, I'm Keshav Malik </div>
                    <div className='text-sm text-gray-300'> Full Stack Engineer </div>
                </div>
            </div>
            <About/>
        </div>
    )
}

export default Hero