import React from 'react';
import { useParams } from 'react-router-dom';
import { menuCategories } from '../data/menu.js'; // Use .js extension!
import { useCart } from '../context/CartContext';

const ItemDetails = () => {
    // Objective 3: Use useParams to get the dynamic URL segment
    const { categoryPath } = useParams(); 
    const { addToCart } = useCart(); 
    
    const category = menuCategories.find(c => c.path === categoryPath);

    if (!category) {
        return <h2 style={{ textAlign: 'center', padding: '50px', color: '#a47148' }}>Category Not Found!</h2>;
    }

    return (
        <div className="container card-grid">
            {category.items.map(item => (
                <div className="coffee-card" key={item.id}>
                    <img src={item.img} alt={item.name} /> 
                    <div className="card-header">
                        <h3>{item.name}</h3>
                        <div className="price">₱{item.price}</div>
                    </div>
                    <p>{item.description}</p>
                    
                    {/* Event handler calls the global addToCart function */}
                    <button 
                        className="add-to-cart-button"
                        onClick={() => addToCart(item)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemDetails;