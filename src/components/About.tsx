import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <RoughNotation type="box" show={true}>
      <div className='flex flex-col gap-5'>
        <div className='text-2xl font-semibold'>
          ~ About
        </div>
        <div className='text-sm'>
          Hello world; <br /> I'm Keshav Malik, a versatile software developer adept at building robust and scalable systems. I excel in creating seamless backend solutions that power modern applications.
        </div>
      </div>
    </RoughNotation>
  )
}

export default About