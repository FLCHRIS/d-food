import React from 'react'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'
import AOS from 'aos'

export const Clients = ({ paragraph, name, job, image, animation }) => {
  AOS.init()
  return (
    <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay={animation} className='border-[.1rem] flex flex-col justify-between border-Black border-dashed p-[1rem] w-full mx-auto max-w-sm dark:border-White transition-colors'>
      <p className='font-Roboto text-Black dark:text-White md:text-lg transition-colors text-center'>{paragraph}</p>
      <div>
        <img src={image} alt='' className='w-[3.5rem] h-[3.5rem] object-cover mx-auto mt-[2rem]' />
        <p className='font-Roboto font-semibold text-Black md:text-lg text-center mt-[.5rem] dark:text-White transition-colors'>
          {name}
        </p>
        <p className='font-Roboto font-medium text-Black text-center text-sm dark:text-White transition-colors'>
          {job}
        </p>
      </div>
    </div>
  )
}

Clients.propTypes = {
  paragraph: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  image: PropTypes.string,
  animation: PropTypes.string
}
