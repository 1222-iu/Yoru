// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [notification, setNotification] = useState({
        isVisible: false,
        message: '',
        type: 'success'
    });

    // Function to show notification
    const showNotification = (message, type = 'success') => {
        setNotification({
            isVisible: true,
            message,
            type
        });
    };

    // Function to hide notification
    const hideNotification = () => {
        setNotification(prev => ({
            ...prev,
            isVisible: false
        }));
    };

    // Function to add an item to the cart
    const addToCart = (itemData) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === itemData.id);

            if (existingItem) {
                // If item exists, increase quantity
                const updatedCart = prevCart.map(item =>
                    item.id === itemData.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                showNotification(`${itemData.name} quantity increased!`, 'success');
                return updatedCart;
            } else {
                // If item is new, add it with quantity 1
                const updatedCart = [...prevCart, { ...itemData, quantity: 1 }];
                showNotification(`${itemData.name} added to cart!`, 'success');
                return updatedCart;
            }
        });
    };

    const value = {
        cart,
        setCart,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        notification,
        showNotification,
        hideNotification,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    return useContext(CartContext);
};