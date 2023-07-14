import React from 'react'
import img1 from '../assets/caseylee.jpg'
import img2 from '../assets/jasonleung.jpg'
import img3 from '../assets/jaywennington.jpg'
import img4 from '../assets/jonathanborba.jpg'
import img5 from '../assets/patricktomasso.jpg'
import img6 from '../assets/sebastiancoman.jpg'

export const Gallery = () => {
  return (
    <section className='mt-[3rem]'>
      <p className='font-Roboto font-semibold text-Black dark:text-White transition-colors'>OUR</p>
      <h2 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] text-Black dark:text-White'>
        SHOTS
      </h2>
      <div className='gallery'>
        <img src={img1} alt='' aria-hidden='true' className='img1' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='600' />
        <img src={img2} alt='' aria-hidden='true' className='img2' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' />
        <img src={img3} alt='' aria-hidden='true' className='img3' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' />
        <img src={img4} alt='' aria-hidden='true' className='img4' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' />
        <img src={img5} alt='' aria-hidden='true' className='img5' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='600' />
        <img src={img6} alt='' aria-hidden='true' className='img6' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='500' />
      </div>
    </section>
  )
}
