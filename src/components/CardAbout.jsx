import React from 'react'
import PropTypes from 'prop-types'

export const CardAbout = ({ title, subtitle, paragraph, image, reverse }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' className='about__card'>
      <div className={reverse}>
        <p className='font-Roboto font-semibold text-Black dark:text-White transition-colors'>
          {subtitle}
        </p>
        <h3 className='font-Roboto font-bold text-[1.25rem] text-Black dark:text-White'>
          {title}
        </h3>
        <p className=' font-Roboto text-Black transition-colors dark:text-White my-[1rem]'>
          {paragraph}
        </p>
      </div>
      <img src={image} alt='' aria-hidden='true' className='w-full h-[13rem] object-cover md:h-[16rem] lg:h-[22rem]' />
    </div>
  )
}

CardAbout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
  reverse: PropTypes.string
}
