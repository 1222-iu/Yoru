import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { menuCategories } from '../data/menu.js';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; 

const ItemDetails = () => {
    // 1. Router Hooks: Get URL parameter and modal function
    const { categoryPath } = useParams(); 
    // CRITICAL FIX: Accesses openAuthModal from the Outlet context passed by App.jsx
    

    // 2. Context Hooks: Get state and functions
    const { addToCart } = useCart(); 
    const { currentUser } = useAuth(); // Checks login status
    
    // Find the current category's data based on the URL path
    const category = menuCategories.find(c => c.path === categoryPath);

    if (!category) {
        return <h2 style={{ textAlign: 'center', padding: '50px', color: '#a47148' }}>Category Not Found!</h2>;
    }

    // Handler: Enforces login rule on click
    const handleAction = (item) => {
        if (currentUser) {
            addToCart(item); // User is logged in, perform action
        } else {
            // User is NOT logged in, open the login modal
            openAuthModal(); 
        }
    };

    return (
        <div className="container card-grid">
            {category.items.map(item => (
                <div className="coffee-card" key={item.id}>
                    <img src={item.img} alt={item.name} /> 
                    <div className="card-header">
                        <h3>{item.name}</h3>
                        <div className="price">₱{item.price}</div>
                    </div>
                    {/* CRITICAL FIX: Reference the item's description, not the category's */}
                    <p>{item.description}</p> 
                    
                    <button 
                        className="add-to-cart-button"
                        onClick={() => handleAction(item)} 
                    >
                        {/* Conditional Button Text */}
                        {currentUser ? "Add to Cart" : "Login to Order"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemDetails;
