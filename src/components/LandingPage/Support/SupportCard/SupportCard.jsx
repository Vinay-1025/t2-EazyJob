import React from 'react'
import './SupportCard.css'

const SupportCard = ( {cardData} ) => {
    return (
        <div className='support-card'>
            <div className="card-name d-flex justify-content-between">
                {cardData.name}
                <div className="support-card-icon">
                    {cardData.icon}
                    {cardData.icon}
                    {cardData.icon}
                </div>
            </div>
            <div className="card-desc">
                {cardData.desc}
            </div>
        </div>
    )
}

export default SupportCard
