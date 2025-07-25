import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import LandingPage from '../pages/LandingPage'
import MainPage from '../components/MainPage'
import Products from '../pages/Products'
import NikeLogin from '../pages/Login'

const Mainroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/mainpage' element={<MainPage/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/Login' element={<NikeLogin/>} />
      
    </Routes>
  )
}

export default Mainroutes
