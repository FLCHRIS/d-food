import React from 'react'
import PropTypes from 'prop-types'

export const Dish = ({ index, saucer, price, description, length }) => {
  return (
    <div
      className={index === length ? 'pb-[.2rem]' : 'border-b-[.1rem] border-Black border-dashed dark:border-White transition-colors pb-[.2rem]'}
    >
      <div className='grid grid-flow-col justify-between items-start mb-[.3rem]'>
        <p className='font-Roboto font-semibold md:text-lg text-Black dark:text-White transition-colors'>
          {saucer}
        </p>
        <p className='font-Roboto font-semibold md:text-lg text-Black dark:text-White transition-colors'>
          {price}
        </p>
      </div>
      <p className='font-Roboto md:text-lg text-Black dark:text-White transition-colors'>
        {description}
      </p>
    </div>
  )
}

Dish.propTypes = {
  index: PropTypes.number,
  saucer: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  length: PropTypes.number
}
