import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ADMIN_SECRET_MENU } from '../data/menu.js'; // Use .js extension!

const AdminDashboard = () => {
    // Objective 3: Check Authentication Status via Context
    const { isAuthenticated, login } = useAuth();
    
    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2 style={{ color: '#a47148', marginBottom: '20px' }}>🔐 Admin Login Required</h2>
                <p>This is a protected page. Please log in to view the secret menu.</p>
                <button 
                    className="order-button" 
                    onClick={login} // Login function from context
                    style={{ marginTop: '20px' }}
                >
                    Log In (Demo)
                </button>
            </div>
        );
    }

    // Rendered only if isAuthenticated is true
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#a47148', marginBottom: '20px' }}>🔐 Admin Dashboard</h2>
            <p>Welcome, Admin! Here is the secret menu available only to staff.</p>
            <div className="card-grid" style={{ paddingTop: '20px' }}>
                {ADMIN_SECRET_MENU.map(item => (
                    <div className="coffee-card" key={item.id} style={{ border: '2px dashed #a47148' }}>
                        <div className="card-header">
                            <h3>{item.name}</h3>
                            <div className="price">₱{item.price}</div>
                        </div>
                        <p>{item.description}</p>
                        <p style={{ color: '#a47148', fontWeight: 'bold' }}>ACCESS GRANTED</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;