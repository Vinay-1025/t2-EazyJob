import React from 'react'
import './Card.css'

const Card = ( {card} ) => {
    return (
        <div className="col-xxl-4 col-md-4">
            <div className="card info-card sales-card">
                <div className="card-body">

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={card.icon}></i>
                        </div>
                        <div className="ps-3">
                            <h6 style={{ color: 'var(--primary)', fontSize: '15px', fontWeight: 550, textTransform: 'uppercase' }}>
                                {card.name}
                            </h6>
                            <span>
                                <span className={`${card.amount > 100 & card.name === "Payment" ? 'text-success' : 'text-primary'
                            } small pt-1 fw-bold`}>
                                {card.name === "Payment" ? '₹' : ''}
                                {card.amount}
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
