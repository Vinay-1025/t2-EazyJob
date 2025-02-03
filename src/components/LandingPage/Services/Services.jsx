import React from 'react'
import './Services.css'
import TitleSub from '../TitleSub/TitleSub'
import ServiceData from './ServiceData/ServiceData';
import ServiceIcon from './ServiceIcon/ServiceIcon';
import { BiCamera, BiRecycle } from 'react-icons/bi'

const Services = () => {


    const serviceIcon1 = {
        icon: <BiCamera />,
        name: 'Instant Doubt Clarification',
        desc: 'Get real-time solutions to your questions from experts and AI-powered tools. Whether it’s a tricky math problem, a coding bug, or a conceptual doubt, EduAssist ensures quick and accurate responses to keep your learning uninterrupted.'
    };
    
    const serviceIcon2 = {
        icon: <BiRecycle />,
        name: 'Personalized Learning Paths',
        desc: 'Explore courses designed to fit your unique learning style, pace, and goals. Our tailored modules ensure you focus on what matters most to you, providing a clear roadmap for skill-building and academic success.'
    };
    const serviceIcon3 = {
        icon: <BiCamera />,
        name: 'Expert Guidance',
        desc: 'Connect with experienced educators and industry professionals who provide personalized mentorship and advice. Learn directly from experts who understand your challenges and can guide you toward achieving your goals.'
    };
    
    const serviceIcon4 = {
        icon: <BiRecycle />,
        name: 'Interactive Learning Resources',
        desc: 'Engage with dynamic quizzes, practical assignments, and immersive simulations to deepen your understanding. These hands-on resources ensure you can apply what you learn effectively in real-world scenarios.'
    };


    const subtitle = "At EduAssist, we make learning easier by providing the support and resources you need. Whether you're tackling tough topics, preparing for exams, or learning new skills, we're here to help.";

    return (
        <div className="container" id="services">
            <TitleSub title="What can we do for you" subtitle={subtitle} />
            <div className='row'>
                <div className="col-md-4">
                    <ServiceData />
                </div>
                <div className="col-md-8 ">
                    <div className="row">
                        <div className="col-md-6">
                            <ServiceIcon serviceIcon={serviceIcon1} />
                        </div>
                        <div className="col-md-6">
                            <ServiceIcon serviceIcon={serviceIcon2} />
                        </div>
                    </div>
                    <div className="row new-row">
                        <div className="col-md-6">
                            <ServiceIcon serviceIcon={serviceIcon3} />
                        </div>
                        <div className="col-md-6">
                            <ServiceIcon serviceIcon={serviceIcon4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
