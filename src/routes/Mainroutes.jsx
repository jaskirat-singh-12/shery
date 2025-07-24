import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import LandingPage from '../pages/LandingPage'
import MainPage from '../components/MainPage'

const Mainroutes = () => {
  return (
    <Routes>
    <Route path='/about' element={<About/>} />
    <Route path='/' element={<LandingPage/>} />
    <Route path='/mainpage' element={<MainPage/>} />
      
    </Routes>
  )
}

export default Mainroutes
