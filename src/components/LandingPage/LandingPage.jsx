import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Details from './Details/Details'
import Support from './Support/Support'

const LandingPage = () => {

    const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Support />
      <Details />
    </div>
  )
}

export default LandingPage
