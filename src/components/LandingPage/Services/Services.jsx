import React from 'react'
import './Services.css'
import TitleSub from '../TitleSub/TitleSub'
import ServiceData from './ServiceData/ServiceData';
import ServiceIcon from './ServiceIcon/ServiceIcon';
import { BiCamera, BiRecycle } from 'react-icons/bi'

const Services = () => {


    const serviceIcon1 = {
        icon: <BiCamera />,
        name: 'Camera',
        desc: 'Porta si euismod dignissim a iaculis habitant penatibus laoreet mus congue at sodales ipsum pharetra potenti'
    };
    
    const serviceIcon2 = {
        icon: <BiRecycle />,
        name: 'Recycle',
        desc: 'Porta si euismod dignissim a iaculis habitant penatibus laoreet mus congue at sodales ipsum pharetra potenti'
    };
    const serviceIcon3 = {
        icon: <BiCamera />,
        name: 'Camera',
        desc: 'Porta si euismod dignissim a iaculis habitant penatibus laoreet mus congue at sodales ipsum pharetra potenti'
    };
    
    const serviceIcon4 = {
        icon: <BiRecycle />,
        name: 'Recycle',
        desc: 'Porta si euismod dignissim a iaculis habitant penatibus laoreet mus congue at sodales ipsum pharetra potenti'
    };


    const subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

    return (
        <div className="container">
            <TitleSub title="What can we do for you" subtitle={subtitle} />
            <div className='row'>
                <div className="col-md-4">
                    <ServiceData />
                </div>
                <div className="col-md-8">
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
