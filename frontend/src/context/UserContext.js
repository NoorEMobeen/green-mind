import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
//context to store user information after login.

export const UserProvider = ({ children }) => {
    const [user, setUserContext] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const setUser = (user) => {
        if(user){
            setUserContext(user);
            localStorage.setItem('user', JSON.stringify(user));
        } else{
            localStorage.removeItem('user');
        }
};

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
