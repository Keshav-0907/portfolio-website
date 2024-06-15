import React from 'react'
import StackIcon from 'tech-stack-icons'
import { TechStacks } from '@/data/TechStackData'

const TechStack = () => {
  return (
    <div className='md:px-1 px-3'>
      <div className='text-2xl font-semibold'>
        ~ My Techstack
      </div>
      <div className='flex flex-wrap py-5 gap-1 md:gap-2'>
        {TechStacks.map((tech) => (
          <div
            key={tech.id}
            className='flex items-center justify-center px-2 md:px-4 py-1 border border-gray-300 rounded-sm gap-1 md:gap-2 transition transform hover:scale-105 hover:rotate-6 cursor-pointer'
          >
            <StackIcon name={tech.icon} className='w-4 md:w-6 font-extrabold' />
            <div className='text-sm md:text-base'>{tech.name}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TechStack