import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../pages/services/Services'
import About from '../pages/about/About'
import WhyEWIG from '../pages/whyEWIG/WhyEWIG'
import Projects from '../pages/projects/projects'
import Contact from '../pages/contact/Contact'

const AppRouts = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='why-ewig' element={<WhyEWIG/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='projects' element={<Projects/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouts