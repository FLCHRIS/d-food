import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { BiSolidSun, BiMenuAltRight } from 'react-icons/bi'
import { Nav } from './Nav'

export const Header = () => {
  const [theme, setTheme] = useState(false)
  const [menu, setMenu] = useState(false)
  const handleTheme = () => {
    if (theme === false) {
      setTheme(true)
      document.documentElement.classList.add('dark')
    } else {
      setTheme(false)
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className='px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem] grid grid-flow-col justify-between items-center max-w-[90rem] mx-auto'>
      <Link to='/' className='font-Roboto font-bold text-[1.25rem] dark:text-White transition-colors md:text-[1.5rem]'>DF</Link>
      <div className='grid grid-flow-col gap-[1rem] sm:gap-[1.5rem]'>
        <Nav menu={menu} />
        <button onClick={handleTheme} aria-label='Change theme'>
          <FaMoon className={theme === false ? 'text-[1rem] md:text-[1.1rem] text-Black' : 'hidden'} aria-hidden='true' />
          <BiSolidSun className={theme === true ? 'text-[1.2rem] md:text-[1.4rem] text-White' : 'hidden'} aria-hidden='true' />
        </button>
        <button className='relative z-10 sm:hidden' aria-expanded={menu} aria-controls='menu-list' onClick={() => menu === false ? setMenu(true) : setMenu(false)} aria-label='Show menu'>
          <BiMenuAltRight className='text-[1.4rem] text-Black dark:text-White transition-colors' aria-hidden='true' />
        </button>
      </div>
    </header>
  )
}
