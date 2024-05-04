"use client"
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
