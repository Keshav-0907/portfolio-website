import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col gap-2 text-gray-300'>
            <div className=''>
                Full Stack Dev, Indie Hacker, <Link href={'https://www.linkedin.com/posts/keshavmalik_sih2024-drdo-hackathon-activity-7273622291136020480-mQ93'} target='_blank' className='font-semibold underline underline-offset-2'>SIH’24 Winner 🥇</Link>, ex-GDSC Lead, and Tech Nerd. I <span className='font-semibold'>build fast</span>, <span className='font-semibold'>scalable apps</span> with a love for clean UI and solid backend.
            </div>

            <div>
                <span className='font-semibold'>Freelanced with 10+ clients</span>, and built tools like <Link href={'https://formix-seven.vercel.app/'} target='_blank' className='font-semibold underline underline-offset-2'>Formix</Link> & <Link className='font-semibold underline underline-offset-2' href={'https://tap-feedback.vercel.app/'} target='_blank'>Tap Feedback</Link> to solve real-world problems with clean, scalable solutions.
            </div>

            <div>Always building, always learning. ⚒️</div>
        </div>
    )
}

export default About