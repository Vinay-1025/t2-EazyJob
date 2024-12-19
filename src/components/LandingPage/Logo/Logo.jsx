import React from 'react'
import './Logo.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TbMenu3 } from 'react-icons/tb'

const Logo = () => {

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='l-logo d-flex align-items-center'>
                <span className='d-none d-lg-block' style={{ color: '#fff' }}>Eazy Job</span>
            </a>
            <TbMenu3 className='toggle-sidebar-btn' style={{ color:'#fff' }} />
        </div>
    )
}

export default Logo
