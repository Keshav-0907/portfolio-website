import React from 'react'
import ExperianceCard from '../atoms/ExperianceCard'

const experianceData = [
  {
    title: 'Full Stack Development Consultant',
    company: 'Endeavor AI',
    duration: 'Dec 2024 - Present',
    logo: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1744978300/uludo18btaxcvyloqtb0.jpg',
    location: 'Remote - USA',
    website: 'https://www.endeavor.ai/',
  },
  {
    title: 'Full Stack Developer (Intern)',
    company: 'Train Rex',
    duration: 'Jul 2024 - Dec 2024',
    logo: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1744978525/mggn6htybkviq6ojoz12.jpg',
    location: 'Remote - India',
    website: 'https://trainrexofficial.com/',


  },
  {
    title: 'Frontend Developer (Intern)',
    company: 'Hyperly AI',
    duration: 'May 2024 - Jul 2024',
    logo: 'https://res.cloudinary.com/dzqgyl0wf/image/upload/v1744978612/bvxobef1bl4nvczacpjx.jpg',
    location: 'Remote - India',
    website: 'https://www.amplyfy.com/',
  }
]

const Experiance = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-2xl font-semibold'>
        ~ Work Experiance
      </div>
      <div className='flex gap-5 flex-col'>
        {
          experianceData.map((data, index) => (
            <ExperianceCard key={index} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Experiance