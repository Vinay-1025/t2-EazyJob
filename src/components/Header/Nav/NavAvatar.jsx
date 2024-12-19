import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import { useNavigate } from 'react-router-dom';
import './NavAvatar.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { FaUserTie } from 'react-icons/fa'
import { RiDashboardFill, RiMoneyRupeeCircleLine, RiSettings4Fill, RiSettings4Line } from "react-icons/ri";
import { PiGraphFill, PiMoney, PiMoneyWavyBold, PiSignOutBold } from 'react-icons/pi'

const NavAvatar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    }

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="d-flex align-items-center position-relative ">
            <div className="header-navelements">
                {/* Use NavLink for Dashboard */}
                <NavLink to="/dashboard" className="header-element-icon">
                    <RiDashboardFill />
                </NavLink>

                {/* Use NavLink for Reports */}
                <NavLink to="/reports" className="header-element-icon">
                    <PiGraphFill />
                </NavLink>
                
                <NavLink to="/payments" className="header-element-icon">
                    <RiMoneyRupeeCircleLine />
                </NavLink>
                
                <NavLink to="/settings" className="header-element-icon">
                    <RiSettings4Fill />
                </NavLink>

                <FaUserTie style={{fontSize: '30px', cursor: 'pointer', marginRight: '30px', marginTop: '12px', alignItems: 'center' }}
                onClick={toggleDropdown}/>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
                <div
                    ref={dropdownRef}
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuButton"
                    style={{
                        position: 'absolute',
                        right: '2px',
                        top: '70px',
                        width: '300px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 32px rgba(1, 14, 112, 0.3)',
                    }}
                >
                    {/* Profile Information Section */}
                    <div className="p-3">
                        <h6 className="mb-1">John Doe</h6> {/* Profile Name */}
                        <small className="text-muted">Admin</small> {/* Role */}
                        <div className="text-muted">john.doe@example.com</div> {/* Email */}
                    </div>

                    <hr className="m-0" />

                    <div className="d-flex justify-content-between align-items-center p-3">
                        <a href="#settings" className="dropdown-item d-flex align-items-center">
                            <i className="bi bi-gear me-2"></i>Settings
                        </a>
                        <div className="dropdown-item d-flex align-items-center"  onClick={handleLogout}>
                            <i className="bi bi-box-arrow-right me-2"></i>Logout
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavAvatar;
