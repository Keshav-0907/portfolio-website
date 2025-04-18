import React from 'react'
import ProjectCard from '../atoms/ProjectCard'

const projectData = [
  {
    title: 'Formix',
    description: 'Formix is a dynamic form creation platform with drag-and-drop builder, live preview, pre-built presets, persistent state (Redux), and full lifecycle features like sharing, analytics, and response tracking.',
    demoUrl: 'https://formix-seven.vercel.app/',
    image: '/projects/Formix.png',
    githubUrl : 'https://github.com/Keshav-0907/formix',
    date: 'March 2025',
  },
  {
    title: 'GharSetu',
    description: 'A full-featured real estate platform with property listings, map integration, OTP-based auth, and seamless search filters.',
    demoUrl: 'https://www.gharsetu.com/',
    image: '/projects/Gharsetu.png',
    date: 'March 2025',
  }
]

const Projects = () => {
  return (
    <div>
      <div className='text-2xl font-semibold'>
        ~ Projects
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects