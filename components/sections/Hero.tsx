'use client';
import Image from 'next/image'
import React from 'react'
import Badge from '../atoms/Badge'
import About from './About'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "let-s-talk" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <div className='text-base pt-8 md:pb-4 flex gap-4 flex-col'>
            <div className='flex items-center gap-4'>
                <Image src={'/keshav.png'} alt='keshav' width={60} height={60} className='rounded-sm hover:grayscale-100 transition-all duration-300 cursor-pointer' />
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col'>
                        <div className='text-lg font-semibold'> Hi, I'm Keshav Malik </div>
                        <div className='text-sm text-gray-300'> Full Stack Engineer </div>
                    </div>

                    <div data-cal-namespace="let-s-talk"
                        data-cal-link="keshav-0907/let-s-talk"

                        data-cal-config='{"layout":"month_view","theme":"dark"}' className=' flex items-center gap-2 bg-[#2c2c2c] text-green-400 px-3 cursor-pointer py-1 rounded-full text-xs font-semibold w-fit'>
                        <div className="relative">
                            <span className="absolute top-1 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                            <span className=" inline-block w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        Available for work [t]
                    </div>

                </div>
            </div>
            <About />
        </div>
    )
}

export default Hero