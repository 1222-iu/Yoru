import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

// Import Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import Contact from './pages/Contact.jsx'; 
import Rewards from './pages/Rewards.jsx'; 
import NotFound from './pages/NotFound.jsx'; 
import AdminDashboard from './pages/AdminDashboard.jsx'; 

// Import Contexts
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

// Import global CSS (ensure your full CSS is in this file)
import './index.css'; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App is the main layout/shell
        errorElement: <NotFound />, 
        children: [
            { index: true, element: <Home /> },           // HOME
            { path: "about", element: <About /> },         // ABOUT
            
            // Nested and Dynamic Routes for Menu
            { 
                path: "menu",
                element: <Menu />, 
                children: [
                    // --- CRITICAL FIX ---
                    // 1. Redirect base path /menu to the default category /menu/coffee
                    { 
                        index: true, 
                        element: <ItemDetails />
                    },
                    // 2. Dynamic segment for category selection: /menu/:categoryPath
                    { path: ":categoryPath", element: <ItemDetails /> }, 
                ]
            },
            
            { path: "contact", element: <Contact /> },     // ETC
            { path: "rewards", element: <Rewards /> },     // ETC
            
            // Protected Route Target
            { path: "admin-dashboard", element: <AdminDashboard /> },
        ]
    },
    // Fallback route for all unmatched paths (Objective 4 - 404 page)
    { path: "*", element: <NotFound /> } 
]);

// ----------------------------------------------------------------
// THIS IS THE SINGLE, CORRECT RENDER BLOCK WITH ALL PROVIDERS
// ----------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Context Providers must wrap the entire application */}
        <AuthProvider>
            <CartProvider> 
                <RouterProvider router={router} />
            </CartProvider>
        </AuthProvider>
    </React.StrictMode>
);
