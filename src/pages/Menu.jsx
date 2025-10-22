// src/pages/Menu.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { menuCategories } from '../data/menu.js';

const Menu = () => {
    return (
        <div className="menu-page">
            <h2 style={{ padding: '20px 0', textAlign: 'center' }}>Our Full Menu</h2>
            
            {/* Menu Category Navigation (Nested Routes) */}
            <nav className="tabs">
                {menuCategories.map(category => (
                    // Link to the dynamic path segment: /menu/:categoryPath
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
                {/* Outlet renders the currently matched sub-route (ItemDetails) */}
                <Outlet /> 
            </div>
            
            {/* Default prompt if no sub-route is selected */}
            {!window.location.pathname.startsWith('/menu/') && (
                <p style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>
                    Please select a menu category above to view our delicious offerings!
                </p>
            )}
        </div>
    );
};

export default Menu;