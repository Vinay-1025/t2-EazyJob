import React from 'react'
import './About.css'
import VideoSection from './VideoSection'
import AboutData from './AboutData'

const About = () => {
    return (
        <div className='container-fluid'>
        <div className='row about-section'>
            <div className="col-lg-4">
                <VideoSection />
            </div>
            <div className="col-lg-8">
                <AboutData />
            </div>
        </div>
        </div>
    )
}

export default About
