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
    // Get cart state and functions
    const { cart, setCart, isCartOpen, closeCart, notification, hideNotification } = useCart(); 

    // --- MODAL STATE MANAGEMENT ---
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formKind, setFormKind] = useState(null); 

    const openForm = (kind) => { setFormKind(kind); setIsFormOpen(true); };
    const closeForm = () => { setIsFormOpen(false); setFormKind(null); };

    const openAuthModal = () => setIsAuthModalOpen(true); 
    const closeAuthModal = () => setIsAuthModalOpen(false); 

    // Define context data to pass to children (Menu/ItemDetails)
    const contextValue = { openAuthModal }; 

    return (
        <>
            <Header onOpenForm={openForm} openAuthModal={openAuthModal} /> 
            
            <main className="container">
                {/* CRITICAL: Pass the context to all child routes */}
                <Outlet context={contextValue} /> 
            </main>
            
            <Footer />
            
            <CartModal 
                isOpen={isCartOpen} 
                onClose={closeCart} 
                cart={cart} 
                setCart={setCart} 
            />
            
            <FormModal 
                kind={formKind} 
                isOpen={isFormOpen} 
                onClose={closeForm} 
            />

            <AuthModal 
                isOpen={isAuthModalOpen} 
                onClose={closeAuthModal} 
            /> 

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
