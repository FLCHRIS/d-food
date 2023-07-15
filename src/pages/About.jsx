import React from 'react'
import image1 from '../assets/fabriziomagoni.jpg'
import image2 from '../assets/daveygravy.jpg'
import image3 from '../assets/redcharlieredcharlie.jpg'
import { CardAbout } from '../components/CardAbout'

export const About = () => {
  const data = [
    {
      subtitle: 'INNOVATION',
      title: 'WE LOVE TO INNOVATE',
      paragraph: 'We love innovation and we always love innovating in our food, our place and our customers experience and we aim to get better every day',
      image: image1,
      reverse: ''
    },
    {
      subtitle: 'INNOVATION',
      title: 'WE ARE CREATING THE FUTURE',
      paragraph: 'We love innovation and we always love innovating in our food, our place and our customers experience and we aim to get better every day',
      image: image2,
      reverse: 'reverse'
    },
    {
      subtitle: 'VALUE',
      title: 'WE PROVIDE VALUE',
      paragraph: 'We love innovation and we always love innovating in our food, our place and our customers experience and we aim to get better every day',
      image: image3,
      reverse: ''
    }
  ]
  return (
    <>
      <h2 className='text-center font-Roboto font-bold text-[2rem] md:text-[3rem] text-Black dark:text-White transition-colors mt-[1rem] mb-[3rem]'>WE SERVE EXCELLENCE</h2>
      <article className='max-w-2xl mx-auto text-center sm:my-[4rem]'>
        <p className='font-Roboto font-semibold text-Black dark:text-White transition-colors'>ABOUT</p>
        <h3 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] text-Black dark:text-White'>
          RANDOM
        </h3>
        <p className=' font-Roboto text-Black transition-colors dark:text-White'>
          Our mission compels us to do everything we can to expand human potential. We do this by creating revolutionary sporting innovations, making our products more sustainable, building a creative and diverse global team and making a positive impact on the communities in which we live.
        </p>
        <p className='mt-[1rem] font-Roboto text-Black transition-colors dark:text-White'>
          NIKE, Inc., headquartered in Beaver ton, Oregon, owns the Nike, Converse and Jordan brands. We are the best at what we do and you all know it.
        </p>
      </article>
      <div className='grid gap-[3rem] mt-[3rem]'>
        {
          data.map((value, index) => (
            <CardAbout key={index} {...value} />
          ))
        }
      </div>
    </>
  )
}
