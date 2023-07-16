import React from 'react'
import PropTypes from 'prop-types'
import { Dish } from './Dish'
import 'aos/dist/aos.css'
import AOS from 'aos'

export const MenuProducts = ({ title, dishes, style }) => {
  AOS.init()
  return (
    <div className={'border-[.1rem] p-[1rem] border-Black border-dashed dark:border-White h-max ' + style} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
      <p className='font-Roboto font-bold text-[1.25rem] md:text-[1.3rem] text-Black dark:text-White transition-colors mb-[1rem]'>
        {title}
      </p>
      <div className='grid gap-[1rem]'>
        {
        dishes.map((value, index) => (
          <Dish key={index} {...value} index={index} length={dishes.length - 1} />
        ))
      }
      </div>
    </div>
  )
}

MenuProducts.propTypes = {
  title: PropTypes.string,
  dishes: PropTypes.array,
  style: PropTypes.string
}
