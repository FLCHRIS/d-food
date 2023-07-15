import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { About } from '../pages/About'
import { Main } from '../pages/Main'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='menu' element={<h1>menu</h1>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<h1>contact</h1>} />
      </Route>
    </Routes>
  )
}
