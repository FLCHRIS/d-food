import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem] max-w-[90rem] mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
