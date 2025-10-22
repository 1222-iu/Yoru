import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { menuCategories } from '../data/menu.js';

const Menu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // CRITICAL FIX: Redirects from /menu to /menu/coffee on first load.
    // This ensures the content always appears immediately.
    useEffect(() => {
        // If the path is exactly /menu (no category selected), force a redirect to default
        if (location.pathname === '/menu' || location.pathname === '/menu/') {
            // Using replace: true prevents the user from hitting a broken path on 'Go Back'
            navigate('/menu/coffee', { replace: true });
        }
    }, [location.pathname, navigate]);


    return (
        <div className="menu-page">
            <h2 style={{ padding: '20px 0', textAlign: 'center' }}>Our Full Menu</h2>
            
            {/* Category Navigation */}
            <nav className="tabs">
                {menuCategories.map(category => (
                    <Link 
                        key={category.path} 
                        to={`/menu/${category.path}`}
                        className="tab-button"
                    >
                        {category.name}
                    </Link>
                ))}
            </nav>

            <div className="category-content">
                {/* Outlet renders ItemDetails */}
                <Outlet /> 
            </div>
        </div>
    );
};

export default Menu;
