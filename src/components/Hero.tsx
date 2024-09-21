import React from 'react'
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import StackIcon from 'tech-stack-icons';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Hero = () => {
    return (
        <div className='flex justify-between px-3 gap-5'>
            <Link href={'/'} className='flex gap-3'>
                <div className=''>
                    <img src='/pp.jpg' alt='hero' className='w-[70px] h-[70px] rounded-xl object-cover cursor-pointer hover:grayscale' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-2xl'> Keshav Malik </div>
                    <div className=''> Software Developer </div>
                </div>
            </Link>
            <div className='flex gap-3 text-sm'>
                <Link href={'https://github.com/Keshav-0907'} className='flex items-center gap-2 cursor-pointer border-gray-600 border-[1px] h-fit px-3 py-1 rounded-md w-fit'> <FaGithub/> Github </Link>
                <Link href={'https://www.linkedin.com/in/keshavmalik'} className='flex items-center gap-2 cursor-pointer border-gray-600 border-[1px] h-fit px-3 py-1 rounded-md w-fit'> <FaLinkedin/> LinkedIn </Link>
            </div>
            {/* <div className=''>
                <div className='flex gap-2 text-[#111111] bg-[#CAC8C5] p-2 items-center rounded-md cursor-pointer'>
                    <ExternalLink className='bg-[#CAC8C5]' size={15} strokeWidth={1.5} />
                    <Link href={'https://drive.google.com/file/d/1rSzeCxUg-6ugiJOrqQIDlTsChgSDMfc-/view?usp=sharing'} target='_blank' className='font-medium bg-[#CAC8C5]'>My Resume</Link>
                </div>
            </div> */}
        </div>
    )
}

export default Hero