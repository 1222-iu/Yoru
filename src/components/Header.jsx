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
    
    // Logout function (uses programmatic navigation to redirect to home)
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
                        
                        {/* --- MAIN ACTION BUTTONS --- */}
                        <div className="header-actions">
                            <button className="order-button" onClick={openCart}>
                                Order Now (Cart)
                            </button>
                            
                            {/* --- FORM BUTTONS (Newsletter, Feedback, Reservation) --- */}
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
                                
                                {/* NOTE: Redundant Admin/Logout buttons removed from this area */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- NAVIGATION TABS --- */}
            <nav className="tabs">
                {/* Standard NavLinks */}
                <NavLink to="/" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")} end>HOME</NavLink>
                <NavLink to="/about" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>ABOUT</NavLink>
                <NavLink to="/menu/coffee" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>MENU</NavLink>
                <NavLink to="/contact" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>CONTACT</NavLink>
                <NavLink to="/rewards" className={({ isActive }) => "tab-button" + (isActive ? " active" : "")}>REWARDS</NavLink>
                
                {/* --- AUTHENTICATION TAB (Opens Modal or Logs Out) --- */}
                {currentUser ? (
                    // User is logged in: Show Logout button
                    <button className="tab-button" onClick={handleLogout}>
                        Logout ({userRole})
                    </button>
                ) : (
                    // User is logged out: Show Login button (opens the AuthModal)
                    <button className="tab-button" onClick={openAuthModal}> 
                        Login / Register
                    </button>
                )}

                {/* --- ADMIN DASHBOARD LINK (Conditional) --- */}
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
