'use client'

import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <UserContext.Provider
            value={{
                activeTab,
                setActiveTab,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
