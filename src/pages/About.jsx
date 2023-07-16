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
        <h3 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] md:text-[1.35rem] text-Black dark:text-White'>
          ABOUT US
        </h3>
        <p className=' font-Roboto text-Black md:text-lg transition-colors dark:text-White'>
          Our mission is to provide proper service to all our customers, with the best quality products and thus offer the best flavors in all our dishes. Drinks from all the most recognized brands, also sushi, pizza and pasta from the best chefs in the world. And best of all... with a wide variety of prices that fit your budget.
        </p>
        <p className='mt-[1rem] font-Roboto md:text-lg text-Black transition-colors dark:text-White'>
          Delicious Food is located in Winnipeg, Canada. We are the best at what we do and you all know it. So don't waste time and come and enjoy all our dishes. WE WILL WAIT FOR YOU!
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
