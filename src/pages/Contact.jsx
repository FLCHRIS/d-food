import React from 'react'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill, BsYoutube } from 'react-icons/bs'
import { BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoTwitter, BiLogoSnapchat } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const Contact = () => {
  return (
    <>
      <p className='text-center font-Roboto font-semibold text-Black dark:text-White transition-colors md:text-lg'>
        NEED HELP
      </p>
      <h2 className='text-center font-Roboto font-bold text-[2rem] md:text-[3rem] text-Black dark:text-White transition-colors mb-[3rem]'>
        CONTACT US
      </h2>
      <div className='md:grid md:grid-cols-2 gap-8 items-center'>
        <form action='' className='w-full mx-auto max-w-xl grid gap-[1rem] grid-flow-row'>
          <input type='email' aria-label='Name' placeholder='Name...' className='px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-Roboto bg-transparent dark:border-White text-Black dark:text-White outline-none placeholder:text-WhiteLight md:text-lg' />
          <input type='email' aria-label='email address' placeholder='Email Address...' className='px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-Roboto bg-transparent dark:border-White text-Black dark:text-White outline-none placeholder:text-WhiteLight md:text-lg' />
          <textarea cols='30' rows='5' aria-label='Message' placeholder='Message...' className='px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-Roboto bg-transparent dark:border-White text-Black dark:text-White outline-none placeholder:text-WhiteLight md:text-lg' />
          <input type='submit' value='SUBMIT' className='px-[.5rem] py-[.3rem] border-[1px] border-Black border-dashed font-semibold text-Black dark:text-White dark:border-White cursor-pointer md:text-lg' />
        </form>
        <div className='mt-[3rem] md:mt-0'>
          <div>
            <h3 className='font-Roboto font-semibold text-Black dark:text-White transition-colors mb-[.5rem] md:text-lg'>
              CONNECT
            </h3>
            <ul>
              <li className='grid grid-flow-col gap-[.5rem] md:gap-[1rem] justify-start items-center font-Roboto text-Black dark:text-White transition-colors'>
                <SiGmail className='text-[1rem] md:text-[1.1rem]' aria-hidden='true' />
                DFSUPPORT@gmail.com
              </li>
              <li className='grid grid-flow-col gap-[.5rem] md:gap-[1rem] justify-start items-center font-Roboto text-Black dark:text-White transition-colors'>
                <BsFillTelephoneFill className='text-[1rem] md:text-[1.1rem]' aria-hidden='true' />
                +45-287-465-190
              </li>
            </ul>
          </div>
          <div className='mt-[2rem]'>
            <h3 className='font-Roboto font-semibold text-Black dark:text-White transition-colors md:text-lg'>
              FOLLOW US
            </h3>
            <ul className='grid grid-flow-col items-center justify-start gap-[1.5rem] mt-[.5rem]'>
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
          </div>
          <div className='mt-[2rem]'>
            <h3 className='font-Roboto font-semibold text-Black dark:text-White transition-colors mb-[.5rem] md:text-lg'>
              OUR ADDRESS
            </h3>
            <div className='grid grid-flow-col items-center justify-start gap-4'>
              <FaMapMarkerAlt className='text-Black dark:text-White transition-colors text-[1rem] md:text-[1.2rem]' aria-hidden='true' />
              <p className='font-Roboto text-Black dark:text-White transition-colors md:text-lg'>
                1387 Grant Ave, Winnipeg, MB R3M 3Y5, Canadá
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
