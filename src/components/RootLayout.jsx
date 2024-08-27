import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
    
    
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default Rootlayout