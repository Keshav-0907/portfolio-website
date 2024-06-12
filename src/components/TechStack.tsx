import React from 'react'
import StackIcon from 'tech-stack-icons'
import { TechStacks } from '@/data/TechStackData'

const TechStack = () => {
  return (
    <div>
        <div className='text-2xl font-semibold'>
            ~ My Techstack
        </div>
        <div className='flex gap-2 py-5 flex-wrap'>
          {
            TechStacks.map((tech) => (
              <div key={tech.id} className='flex items-center justify-center px-4 py-1 border-[1px] rounded-sm gap-2 transition transform hover:scale-105 hover:rotate-6 cursor-pointer'>
              <StackIcon name={tech.icon} className='w-6 font-extrabold' />
              <div>{tech.name}</div>
            </div>
            
            ))
          }
        </div>
    </div>
  )
}

export default TechStack