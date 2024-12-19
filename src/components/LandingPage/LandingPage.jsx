import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'

const LandingPage = () => {

    const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default LandingPage
