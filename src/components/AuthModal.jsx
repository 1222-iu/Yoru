import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ isOpen, onClose }) => {
    const { login, register, loading, isAdmin } = useAuth();
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (isLoginView) {
            const result = await login(email, password);
            if (result.success) {
                onClose(); // Close modal on successful login
            } else {
                setError(result.error);
            }
        } else {
            const result = await register(email, password);
            if (result.success) {
                setMessage(result.message + " Switching to login view.");
                setIsLoginView(true); // Switch to login after successful registration
                setEmail('');
                setPassword('');
            } else {
                setError(result.message);
            }
        }
    };

    if (!isOpen || isAdmin) { // Do not show if modal is closed or user is admin
        return null;
    }

    const title = isLoginView ? "Customer Login" : "Register New Account";
    const submitText = isLoginView ? "Sign In" : "Register";

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content" style={{maxWidth: '400px'}}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2 style={{textAlign: 'center'}}>{title}</h2>
                
                {message && <p style={{color: 'green', fontSize: '0.9rem', textAlign: 'center'}}>{message}</p>}
                {error && <p style={{color: '#cc0000', fontSize: '0.9rem', textAlign: 'center'}}>{error}</p>}

                <form className="inline-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="authEmail">Email</label>
                        <input type="email" id="authEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="authPassword">Password</label>
                        <input type="password" id="authPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    
                    <button type="submit" className="form-submit" disabled={loading} style={{width: '100%', marginBottom: '10px'}}>
                        {loading ? 'Processing...' : submitText}
                    </button>
                    
                    <button 
                        type="button"
                        className="modal-button clear-cart-button" 
                        onClick={() => { setIsLoginView(!isLoginView); setError(''); setMessage('');}}
                        style={{width: '100%'}}
                    >
                        {isLoginView ? 'Need an account? Register' : 'Already have an account? Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;