import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    // Objective 4: Implement programmatic navigation
    const navigate = useNavigate(); 
    
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '3em', color: '#a47148', marginBottom: '10px' }}>404</h1>
            <h2 style={{ marginBottom: '30px' }}>Page Not Found!</h2>
            <p style={{ marginBottom: '30px' }}>
                The path <code>{window.location.pathname}</code> does not match any valid route.
            </p>
            
            {/* Programmatic navigation back to Home */}
            <button 
                className="order-button" 
                onClick={() => navigate('/')} 
                style={{ marginTop: '20px' }}
            >
                Go to Home
            </button>
            
            {/* Programmatic navigation back one step */}
            <button 
                className="mini-button" 
                onClick={() => navigate(-1)} 
                style={{ marginTop: '20px', marginLeft: '10px', backgroundColor: '#7a5e48' }}
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;