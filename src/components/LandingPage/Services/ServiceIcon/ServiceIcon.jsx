import React from 'react'
import './ServiceIcon.css'
const ServiceIcon = ( {serviceIcon} ) => {
    return (
        <div className='service-icon'>
            <div className="ser-icon">
                {serviceIcon.icon}
            </div>
            <div className="ser-name">
                {serviceIcon.name}
            </div>
            <div className="ser-desc">
                {serviceIcon.desc}
            </div>
        </div>
    )
}

export default ServiceIcon
