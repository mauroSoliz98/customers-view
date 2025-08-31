import React from 'react'
import icon from '../../assets/icon.svg'

export const IntroSection = () => {
  return (
    <div className='mb-8'>
      <div className='mb-8 flex items-center gap-4'>
        <div className='relative inline-flex h-10 w-10 p-1 items-center justify-center rounded-full bg-[#8334E7]'>
          <img src={icon} alt="icon" />
        </div>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#933BDD] to-[#D53F8C]">
          Talent Scout Assistand
        </h1>
      </div>
      <h1 className='text-3xl font-bold mb-2'>
        Our customers rely on us to find the best candidate-to-position fit, faster and easier.
      </h1>
      <p className='text-3xl'>
        Discover how HR Professionals and Hiring Managers are using Talent Scout and leveraging AI to screen and evaluate candidates based on key skills, requirements and psychographic assessments.
      </p>
    </div>
  )
}
