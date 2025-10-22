import React, { createContext, useContext, useState, useEffect } from 'react';

// IMPORTANT: Define the assumed local API endpoints
const LOGIN_API_ENDPOINT = "http://localhost/api/login.php"; 
const REGISTER_API_ENDPOINT = "http://localhost/api/register.php"; 

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Stores the current user data
    const [user, setUser] = useState(null); 
    const [userRole, setUserRole] = useState(null);
    const [loading, setLoading] = useState(false); 

    // --- Role and State Setting Effect ---
    useEffect(() => {
        if (user && user.role) {
            // Role is set dynamically from the user object returned by the server
            setUserRole(user.role); 
        } else {
            setUserRole(null);
        }
    }, [user]); 

    // --- Core API Request Function ---
    const apiRequest = async (endpoint, email, password) => {
        setLoading(true);
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                // If the PHP script returned a non-200 status (e.g., 401, 409)
                const errorData = await response.json();
                return { success: false, message: errorData.message || `Server error: Status ${response.status}` };
            }

            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            // This error suggests XAMPP server is offline or the URL is wrong
            return { success: false, message: `Could not connect to API. Is XAMPP running? Error: ${error.message}` };
        }
    };
    
    // --- Authentication Functions ---

    // Unified login function for both users and admin
    const login = async (email, password) => {
        const data = await apiRequest(LOGIN_API_ENDPOINT, email, password);
        
        if (data.success && data.user) {
            // Set the full user object including the role returned from MySQL
            setUser(data.user);
            return { success: true };
        } else {
            return { success: false, error: data.message || "Login failed." };
        }
    };

    const register = async (email, password) => {
        const data = await apiRequest(REGISTER_API_ENDPOINT, email, password);
        return data; // returns {success: bool, message: string}
    };

    const logout = () => {
        setUser(null);
        setUserRole(null);
    };

    // --- Context Value ---
    const value = { 
        currentUser: user, 
        userRole,
        loading, 
        isAuthenticated: !!user,
        isAdmin: userRole === 'admin', // Check role based on MySQL data
        login, 
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
