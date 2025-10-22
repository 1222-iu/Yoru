import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

// Accept the function to open the authentication modal
const Header = ({ onOpenForm, openAuthModal }) => { 
    // Get state and functions from contexts
    const { currentUser, userRole, logout, isAdmin } = useAuth(); 
    const { openCart } = useCart();
    const navigate = useNavigate(); 
    
    // Logout function
    const handleLogout = () => {
        logout();
        navigate('/'); 
    };

    return (
        <header>
            <div className="header-background">
                <img src="/images/coffee-shop-header.jpg" alt="Coffee Shop Interior" /> 
                <div className="header-overlay">
                    <div className="header-content">
                        <h1>Yoru. 夜 </h1>
                        <p>"Where warm drinks and comfort plates end your day right..."</p>
                        
                        <div className="header-actions">
                            
                            {/* CRITICAL: Order Now button requires login */}
                            <button 
                                className="order-button" 
                                onClick={currentUser ? openCart : openAuthModal} 
                            >
                                Order Now (Cart)
                            </button>
                            
                            {/* FORM BUTTONS (Newsletter, Feedback, Reservation) */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- NAVIGATION TABS --- */}
            <nav className="tabs">
                {/* Always visible links */}
                <NavLink to="/" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")} end>HOME</NavLink>
                <NavLink to="/about" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>ABOUT</NavLink>
                
                {/* CRITICAL FIX: MENU LINK - ONLY APPEARS IF LOGGED IN */}
                {currentUser ? (
                    <NavLink to="/menu/coffee" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>
                        MENU
                    </NavLink>
                ) : (
                    // Placeholder span to keep layout stable when logged out
                    <span className="tab-button-placeholder"></span>
                )}

                {/* Always visible links */}
                <NavLink to="/contact" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>CONTACT</NavLink>
                <NavLink to="/rewards" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>REWARDS</NavLink>
                
                {/* AUTHENTICATION TAB (Login/Logout) */}
                {currentUser ? (
                    <button className="tab-button" onClick={handleLogout}>
                        Logout ({userRole})
                    </button>
                ) : (
                    <button className="tab-button" onClick={openAuthModal}> 
                        Login / Register
                    </button>
                )}

                {/* ADMIN DASHBOARD LINK (Conditional) */}
                {isAdmin && (
                    <NavLink to="/admin-dashboard" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>
                        ADMIN
                    </NavLink>
                )}
            </nav>
        </header>
    );
};

export default Header;
