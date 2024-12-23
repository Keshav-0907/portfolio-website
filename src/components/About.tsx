import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <div className='flex flex-col gap-5 px-3'>
      <div className='text-2xl font-semibold'>
        ~ About
      </div>

      <div className='text-sm'>
        Hello world; <br /> {"I'm"} Keshav Malik,
        a versatile Full Stack developer and designer focused on building robust, scalable websites and applications. I excel in creating seamless backend solutions that power modern applications, with a strong emphasis on user experience, design aesthetics, developer experience, and meaningful impact.
      </div>

    </div>
  )
}

export default About