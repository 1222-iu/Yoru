import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import CartModal from './components/CartModal'; 
import FormModal from './components/FormModal';
import AuthModal from './components/AuthModal'; 
import Notification from './components/Notification';
import { useCart } from './context/CartContext'; 

const App = () => {
    // Get cart state and functions from CartContext
    const { cart, setCart, isCartOpen, closeCart, notification, hideNotification } = useCart(); 

    // --- AUTH MODAL STATE (CRITICAL) ---
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    
    // --- GENERIC FORM MODAL STATE (Newsletter, Reservation) ---
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formKind, setFormKind] = useState(null); 

    const openForm = (kind) => { setFormKind(kind); setIsFormOpen(true); };
    const closeForm = () => { setIsFormOpen(false); setFormKind(null); };

    // Functions to control the AuthModal
    const openAuthModal = () => setIsAuthModalOpen(true); 
    const closeAuthModal = () => setIsAuthModalOpen(false); 

    return (
        <>
            {/* Pass the function to the Header */}
            <Header onOpenForm={openForm} openAuthModal={openAuthModal} /> 
            
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
            
            {/* RENDER THE GENERIC FORM MODAL */}
            <FormModal 
                kind={formKind} 
                isOpen={isFormOpen} 
                onClose={closeForm} 
            />

            {/* --- RENDER AUTH MODAL HERE --- */}
            <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} /> 

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
