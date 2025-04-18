import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ExperianceCardProps {
  data: {
    title: string;
    company: string;
    duration: string;
    logo: string;
    location: string;
    website: string;
  };
}

const ExperianceCard = ({ data }: ExperianceCardProps) => {
  return (
    <div className='flex gap-4 w-full'>
      <Link href={data.website} target='_blank' className='w-[45px] h-[45px]'>
        <Image src={data.logo} alt={data.company} width={45} height={45} className='rounded-full' />
      </Link>

      <div className='w-full flex justify-between'>
        <div className='flex flex-col'>
          <div className=''> {data.company} </div>
          <div className='text-sm text-gray-400'> {data.title} </div>
        </div>

        <div className='text-sm flex flex-col items-end'>
          <div>{data.duration}</div>
          <div className='text-gray-400'> {data.location} </div>
        </div>
      </div>
    </div>
  )
}

export default ExperianceCard