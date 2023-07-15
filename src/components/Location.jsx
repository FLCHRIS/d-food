import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Location = () => {
  AOS.init()
  return (
    <article className='mt-[3rem] px-[2rem] py-[1.5rem] border-[.1rem] border-Black border-dashed dark:border-White transition-colors max-w-sm mx-auto' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='800'>
      <p className='font-Roboto font-bold text-center text-Black dark:text-White transition-colors md:text-lg'>FIND US</p>
      <h2 className='font-Roboto text-[1.25rem] font-bold text-center text-Black dark:text-White transition-colors md:text-[1.35rem]'>OUR ADDRESS</h2>
      <div className='grid grid-flow-col items-center justify-center gap-4 mt-[1rem]'>
        <FaMapMarkerAlt className='text-3xl text-Black dark:text-White transition-colors' aria-hidden='true' />
        <p className='font-Roboto text-Black dark:text-White transition-colors md:text-lg'>
          1387 Grant Ave, Winnipeg, MB R3M 3Y5, Canadá
        </p>
      </div>
    </article>
  )
}
