import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // <-- VERCEL ANALYTICS IMPORT
import Header from './components/Header';
import Footer from './components/Footer'; 
import CartModal from './components/CartModal'; 
import FormModal from './components/FormModal';
import Notification from './components/Notification';
import { useCart } from './context/CartContext'; 

const App = () => {
    // Get cart state and functions from CartContext
    const { cart, setCart, isCartOpen, closeCart, notification, hideNotification } = useCart(); 

    // Form Modal Management
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formKind, setFormKind] = useState(null);

    const openForm = (kind) => {
        setFormKind(kind);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setFormKind(null);
    };

    return (
        <>
            {/* VERCEL ANALYTICS COMPONENT: Loads on every page */}
            <Analytics /> 

            {/* Pass the openForm function to Header */}
            <Header onOpenForm={openForm} /> 
            
            <main className="container">
                <Outlet />
            </main>
            
            <Footer />
            
            <CartModal 
                isOpen={isCartOpen} 
                onClose={closeCart} 
                cart={cart} 
                setCart={setCart} 
            />
            
            {/* RENDER THE NEW FORM MODAL */}
            <FormModal 
                kind={formKind} 
                isOpen={isFormOpen} 
                onClose={closeForm} 
            />
            
            {/* RENDER THE NOTIFICATION */}
            <Notification 
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={hideNotification}
            />
        </>
    );
};

export default App;