import React from 'react'
import './Support.css'
import TitleSub from '../TitleSub/TitleSub'
import Image from '../../../assets/support.svg'
import SupportCard from './SupportCard/SupportCard'
import { IoIosStarHalf } from "react-icons/io";

const Support = () => {

    const supportCard1 = {
            name: "24/7 Accessibility",
            desc: "Access learning materials, ask questions, and track your progress anytime, anywhere, ensuring that learning is always at your fingertips.",
            icon: <IoIosStarHalf />
        }


    const supportData2 = {
            name: "Collaborative Community",
            desc: "Connect with peers in forums and group discussions to share resources, ask questions, and learn together in a supportive environment.",
            icon: <IoIosStarHalf />
        }

        const supportData3 = {
            name: "Gamified Learning",
            desc: "Earn rewards, badges, and certificates for completing tasks, keeping your learning experience engaging and motivating.",
            icon: <IoIosStarHalf />
        }

    return (
        <div className='container' id='support'>
            <TitleSub title="How do we support" subtitle="At EduAssist, we support your learning with instant doubt clarification, personalized courses, and expert guidance. Our interactive tools and collaborative community ensure hands-on learning, while progress tracking keeps you motivated. With EduAssist, you have everything you need to excel in your studies and beyond." />
            <div className="row">
                <div className="col-md-6">
                    <img src={Image} alt="support" style={{ width: '100%', transform: 'scaleX(-1)' }} />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <SupportCard cardData={supportCard1} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <SupportCard cardData={supportData2} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <SupportCard cardData={supportData3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
