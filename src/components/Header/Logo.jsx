import React from 'react'
import './Logo.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TbMenu3 } from 'react-icons/tb'

const Logo = () => {

    const handleToggleSidebar = () => {
        document.body.classList.toggle("toggle-sidebar");
    };

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='logo d-flex align-items-center'>
                <span className='d-none d-lg-block'>Eazy Job</span>
            </a>
            <TbMenu3 className='toggle-sidebar-btn' onClick={handleToggleSidebar}/>
        </div>
    )
}

export default Logo
