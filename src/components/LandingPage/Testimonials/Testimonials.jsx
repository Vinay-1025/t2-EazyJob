import React from 'react'
import TestimonialsRight from './TestimonialsRight'
import TitleSub from '../TitleSub/TitleSub'

const Testimonials = () => {
    return (
        <div className='container' id='testi'>
            <TitleSub title="Testimonials" subtitle="Real user experiences showcasing how EduAssist enhances learning and professional growth, building trust and highlighting the platform's value." />
            <div className="row">
                <div className="col-12">
                    <TestimonialsRight />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
