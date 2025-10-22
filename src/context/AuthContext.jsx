// src/context/AuthContext.jsx - CORRECTED CODE
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 1. Define State
    const [user, setUser] = useState(null); 

    // 2. Define Functions (login and logout) BEFORE they are used in 'value'
    const login = () => {
        // Demo: Sets a user object to simulate successful login
        setUser({ username: 'Admin' }); 
        alert("Admin logged in (Demo). Check Admin link in the header!");
    };

    const logout = () => {
        // Sets user to null to log out
        setUser(null);
        alert("Admin logged out.");
    };
    
    // 3. Define the Context Value, referencing the functions defined above
    const value = { user, login, logout, isAuthenticated: !!user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};