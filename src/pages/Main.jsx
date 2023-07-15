import React from 'react'
import image from '../assets/pablomerchan.jpg'
import imgpatricio from '../assets/josephgonzalez.jpg'
import imgselena from '../assets/aionyhaust.jpg'
import imgcynthia from '../assets/michaeldam.jpg'
import { Features } from '../components/Features'
import { Clients } from '../components/Clients'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Gallery } from '../components/Gallery'

export const Main = () => {
  const features = [
    {
      id: 1,
      title: 'ALWAYS FRESH',
      paragraph: "We focus on serving fresh food always. Fresh food is always best for your precious body and we keep that in mind and that's why we like to serve everything fresh",
      animation: '900'
    },
    {
      id: 2,
      title: 'AMAZING TASTE',
      paragraph: 'Serving tasty food has always been our first priority and also to make sure the taste is constant every time you consume, you will see no difference in taste',
      animation: '600'
    },
    {
      id: 3,
      title: 'PREMIUM INGREDIENTS',
      paragraph: "We know great ingredients are must to take the taste and health on next level so that's why we focus on using organic ingredients so you don't have to worry",
      animation: '300'
    }
  ]
  const clients = [
    {
      id: 1,
      paragraph: 'The food was absolutely fantastic, from preparation to serving was a joy. We especially enjoyed the specialty drinks at the bar, the cucumber/cilantro infused vodka martini and the K&P was fantastic.',
      img: imgpatricio,
      name: 'PATRICIO D',
      job: 'LAWYER',
      animation: '300'
    },
    {
      id: 2,
      paragraph: 'A very friendly and welcoming place to spend time. All staff are well trained, helpful and all with a smile. Everything is handled with great efficiency and attention to detail.',
      img: imgselena,
      name: 'SELENA J',
      job: 'ARCHITECT',
      animation: '600'
    },
    {
      id: 3,
      paragraph: 'Great dining experience...from walking in the door, being greeted by the staff, being seated, ordering drinks, it takes about 5 minutes. The food is hot and tasty. The servers are very friendly.',
      img: imgcynthia,
      name: 'CYNTHIA J',
      job: 'DENTIST',
      animation: '900'
    }
  ]
  AOS.init()
  return (
    <>
      <div className='py-[2rem]'>
        <h1 className='text-center font-Roboto font-bold text-[2rem] md:text-[3rem] text-Black dark:text-White transition-colors'>
          DELICIOUS FOOD
        </h1>
        <p className='text-center font-Roboto md:text-lg mt-[.1rem] mb-[1rem] text-Black dark:text-White transition-colors'>
          DF is a restaurant, bar, and cafe located in Canada.
        </p>
        <a href='#' className='w-max block font-Roboto md:text-lg font-medium mx-auto border-b-[.1rem] text-Black border-dashed border-Black py-[.1rem] px-[.5rem] dark:text-White dark:border-White transition-colors'>
          ORDER NOW
        </a>
      </div>
      <section className='my-[1rem] sm:grid sm:grid-flow-col items-center sm:gap-3'>
        <div>
          <p className='font-Roboto font-semibold md:text-lg text-Black dark:text-White transition-colors'>WHY US</p>
          <h2 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] md:text-[1.35rem] text-Black dark:text-White'>
            SERVING YOU GREAT TIME
          </h2>
          <p className='font-Roboto text-Black md:text-lg dark:text-White transition-colors'>
            Our mission is to provide our customers with a place to celebrate life's special moments by providing the best food, service and atmosphere. Putting a smile on our customers' faces is always our top priority and we work hard to make it happen.
          </p>
          <p className='font-Roboto text-Black mt-[1rem] md:text-lg dark:text-White transition-colors'>
            Our company was founded in 1982 and our goal is to last forever and bring happiness into your life.
          </p>
          <a href='#' className='w-max block font-Roboto md:text-lg font-medium mx-auto border-b-[.1rem] text-Black border-dashed border-Black py-[.1rem] px-[.5rem] dark:text-White dark:border-White transition-colors mt-[4rem] sm:mt-[1rem] sm:mx-0'>
            OUT STORY
          </a>
        </div>
        <img src={image} alt='' aria-hidden='true' className='my-[2rem] w-full max-w-md mx-auto sm:max-w-xl' data-aos='fade-up' data-aos-duration='1000' />
      </section>
      <section className='my-[1rem]'>
        <p className='font-Roboto font-semibold md:text-lg text-Black dark:text-White transition-colors'>EXPLORE</p>
        <h2 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] md:text-[1.35rem] text-Black dark:text-White transition-colors'>
          MENU FEATURES
        </h2>
        <div className='grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 sm:my-[2rem]'>
          {
          features.map((value) => (
            <Features key={value.id} paragraph={value.paragraph} title={value.title} animation={value.animation} />
          ))
        }
        </div>
        <a href='#' className='w-max block font-Roboto md:text-lg font-medium mx-auto border-b-[.1rem] text-Black border-dashed border-Black py-[.1rem] px-[.5rem] dark:text-White dark:border-White transition-colors mt-[1.5rem]'>
          SEE MENU
        </a>
      </section>
      <section className='my-[1rem]'>
        <p className='font-Roboto font-semibold text-Black dark:text-White transition-colors md:text-lg'>OUR</p>
        <h2 className='font-Roboto font-bold mb-[1rem] text-[1.25rem] text-Black dark:text-White md:text-[1.35rem] transition-colors'>
          CLIENTS
        </h2>
        <div className='grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3 sm:my-[2rem]'>
          {
          clients.map((value) => (
            <Clients key={value.id} paragraph={value.paragraph} name={value.name} job={value.job} image={value.img} animation={value.animation} />
          ))
        }
        </div>
        <a href='#' className='w-max block font-Roboto font-medium mx-auto border-b-[.1rem] text-Black border-dashed border-Black py-[.1rem] px-[.5rem] dark:text-White dark:border-White transition-colors mt-[1.5rem] md:text-lg'>
          READ MORE REVIEWS
        </a>
      </section>
      <Gallery />
    </>
  )
}
