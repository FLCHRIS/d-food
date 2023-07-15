import React from 'react'
import { BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoTwitter, BiLogoSnapchat } from 'react-icons/bi'
import { BsYoutube } from 'react-icons/bs'
import { Location } from './Location'

export const Footer = () => {
  return (
    <footer className='px-[2rem] py-[1rem] md:px-[4rem] sm:py-[2rem] max-w-[90rem] mx-auto'>
      <Location />
      <form action='' className='mt-[4rem]'>
        <p className='text-center font-Roboto font-bold text-Black dark:text-White text-[1.25rem] transition-colors md:text-[1.35rem]'>
          STAY UPDATE WITH DEALS
        </p>
        <input type='email' name='' id='' aria-label='email address' placeholder='Email Address...' className='block w-[12rem] mx-auto px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-Roboto my-[1rem] bg-transparent dark:border-White text-Black dark:text-White outline-none placeholder:text-WhiteLight md:text-lg' />
        <input type='submit' value='SUBMIT' className='block w-[12rem] mx-auto px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-semibold text-Black dark:text-White dark:border-White cursor-pointer md:text-lg' />
      </form>
      <div className='mt-[5rem]'>
        <ul className='grid grid-flow-col items-center justify-center gap-[1.5rem]'>
          <li>
            <a href='#' aria-label='Instagram'>
              <BiLogoInstagramAlt className='text-[1.4rem] md:text-[1.5rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a href='#' aria-label='Facebook'>
              <BiLogoFacebookSquare className='text-[1.4rem] md:text-[1.5rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a href='#' aria-label='Twitter'>
              <BiLogoTwitter className='text-[1.4rem] md:text-[1.5rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a href='#' aria-label='Snapshap'>
              <BiLogoSnapchat className='text-[1.4rem] md:text-[1.5rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
            </a>
          </li>
          <li>
            <a href='#' aria-label='You Tube'>
              <BsYoutube className='text-[1.4rem] md:text-[1.5rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
            </a>
          </li>
        </ul>
        <p className='text-center font-Roboto mt-[1rem] text-Black dark:text-White transition-colors md:text-lg'>&copy; 2023 DF RESTAURANT</p>
        <p className='text-center font-Roboto text-Black dark:text-White transition-colors md:text-lg'>DEVELOPMENT BY <a href='https://github.com/FLCHRIS' target='_blank' className='font-medium' rel='noreferrer'>CHRISTIAN FL</a></p>
      </div>
    </footer>
  )
}
