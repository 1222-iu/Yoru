// src/components/Header.jsx (FINAL CORRECTED VERSION)
import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = ({ onOpenForm }) => { 
    const { user, logout } = useAuth(); 
    const { openCart } = useCart();
    const navigate = useNavigate(); 
    
    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    return (
        <header>
            <div className="header-background">
                {/* 1. IMAGE PATH CHECK: Assumes 'coffee-shop-header.jpg' is in public/images/ */}
                <img src="/images/coffee-shop-header.jpg" alt="Coffee Shop Interior" /> 
                <div className="header-overlay">
                    <div className="header-content">
                        <h1>Yoru. 夜 </h1>
                        <p>"Where warm drinks and comfort plates end your day right..."</p>
                        
                        <div className="header-actions">
                            <button className="order-button" onClick={openCart}>
                                Order Now (Cart)
                            </button>
                            {/* Group for Mini buttons and Login button */}
                            <div className="form-buttons" aria-label="Open forms">
                                <button className="mini-button" onClick={() => onOpenForm('newsletter')}>
                                    Newsletter
                                </button>
                                <button className="mini-button" onClick={() => onOpenForm('feedback')}>
                                    Feedback
                                </button>
                                <button className="mini-button" onClick={() => onOpenForm('reservation')}>
                                    Reservation
                                </button>
                                
                                {user ? (
                                    <>
                                        <button className="mini-button" onClick={handleLogout}>
                                            Logout ({user.username})
                                        </button>
                                        <Link to="/admin-dashboard" className="mini-button">Admin</Link>
                                    </>
                                ) : (
                                    <Link to="/admin-dashboard" className="mini-button admin-login-btn">Admin Login</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. SEPARATE TABS NAV */}
            <nav className="tabs">
                <NavLink to="/" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")} end>HOME</NavLink>
                <NavLink to="/about" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>ABOUT</NavLink>
                <NavLink to="/menu/coffee" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>MENU</NavLink>
                <NavLink to="/contact" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>CONTACT</NavLink>
                <NavLink to="/rewards" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>REWARDS</NavLink>
            </nav>
        </header>
    );
};

export default Header;