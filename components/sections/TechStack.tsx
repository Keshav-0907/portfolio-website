import React from 'react'
import StackIcon from 'tech-stack-icons'

const TechStacks = [
    {
        name: 'React',
        icon: 'reactjs'
    },
    {
        name: 'Redux',
        icon: 'redux'
    },
    {
        name: 'Node.js',
        icon: 'nodejs'
    },
    {
        name: 'JavaScript',
        icon: 'js'
    },
    {
        name: 'Typescript',
        icon: 'typescript'
    },
    {
        name: 'NextJs',
        icon: 'nextjs2'
    },
    {
        name: 'Typescript',
        icon: 'typescript'
    },
    {
        name: 'MongoDB',
        icon: 'mongodb'
    },
    {
        name: 'Prisma',
        icon: 'prisma'
    },
    {
        name: 'Firebase',
        icon: 'firebase'
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql'
    },
    {
        name: 'Supabase',
        icon: 'supabase'
    },
    {
        name: 'TailwindCSS',
        icon: 'tailwindcss'
    },
    {
        name: 'MySQL',
        icon: 'mysql'
    },
    {
        name: 'AWS',
        icon: 'aws'
    },
]

const TechStack = () => {
    return (
        <div className='md:px-1 px-3'>
            <div className='text-2xl font-semibold'>
                ~ My Techstack
            </div>
            <div className='flex flex-wrap py-5 gap-1 md:gap-2'>
                {TechStacks.map((tech, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center px-2 md:px-4 py-1 border border-gray-300 rounded-sm gap-1 md:gap-2 transition transform hover:scale-105 hover:rotate-6 cursor-pointer'
                    >
                        <StackIcon name={tech.icon} className='w-4 font-extrabold' />
                        <div className='text-sm'>{tech.name}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TechStack