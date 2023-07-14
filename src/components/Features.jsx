import React from 'react'
import iconSalad from '../assets/salads.svg'
import PropTypes from 'prop-types'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Features = ({ paragraph, title, animation }) => {
  AOS.init()
  return (
    <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay={animation} className='border-[.1rem] border-Black border-dashed p-[1rem] w-full mx-auto max-w-sm dark:border-White transition-colors'>
      <img src={iconSalad} alt='' aria-hidden='true' className='dark:invert' />
      <h3 className='font-Roboto font-semibold text-Black my-[.8rem] dark:text-White transition-colors'>{title}</h3>
      <p className='font-Roboto text-Black dark:text-White transition-colors'>
        {paragraph}
      </p>
    </div>
  )
}

Features.propTypes = {
  paragraph: PropTypes.string,
  title: PropTypes.string,
  animation: PropTypes.string
}
