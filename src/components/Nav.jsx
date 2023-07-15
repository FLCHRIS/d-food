import React from 'react'
import ProptTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const Nav = ({ menu }) => {
  return (
    <nav id='menu-list' className={menu === true ? 'fixed left-0 z-10 top-0 backdrop-blur-sm w-full h-full grid place-content-center sm:grid-flow-col sm:static' : 'hidden sm:block'}>
      <ul className='grid place-content-center gap-[2rem] sm:gap-[1rem] text-center sm:grid-flow-col'>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive === true ? 'font-Roboto font-bold border-b-[.1rem] border-dashed border-Black p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg' : 'font-Roboto font-bold p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='menu' className={({ isActive }) => isActive === true ? 'font-Roboto font-bold border-b-[.1rem] border-dashed border-Black p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg' : 'font-Roboto font-bold p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg'}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to='contact' className={({ isActive }) => isActive === true ? 'font-Roboto font-bold border-b-[.1rem] border-dashed border-Black p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg' : 'font-Roboto font-bold p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg'}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to='about' className={({ isActive }) => isActive === true ? 'font-Roboto font-bold border-b-[.1rem] border-dashed border-Black p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg' : 'font-Roboto font-bold p-[.1rem] text-[1.25rem] dark:text-White dark:border-White transition-colors sm:text-[1rem] sm:font-normal md:text-lg'}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
Nav.propTypes = {
  menu: ProptTypes.bool
}
