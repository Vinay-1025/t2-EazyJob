import React from 'react'
import './Support.css'
import TitleSub from '../TitleSub/TitleSub'
import Image from '../../../assets/support.svg'
import SupportCard from './SupportCard/SupportCard'
import { IoIosStarHalf } from "react-icons/io";

const Support = () => {

    const supportCard1 = {
            name: "Card1",
            desc: "Sollicitudin quis accumsan finibus eu fusce cubilia faucibus conubia letius ex fringilla velit integer tempus",
            icon: <IoIosStarHalf />
        }


    const supportData2 = {
            name: "Card2",
            desc: "Sollicitudin quis accumsan finibus eu fusce cubilia faucibus conubia letius ex fringilla velit integer tempus",
            icon: <IoIosStarHalf />
        }

        const supportData3 = {
            name: "Card3",
            desc: "Sollicitudin quis accumsan finibus eu fusce cubilia faucibus conubia letius ex fringilla velit integer tempus",
            icon: <IoIosStarHalf />
        }

    return (
        <div className='container'>
            <TitleSub title="How do we support" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud." />
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
