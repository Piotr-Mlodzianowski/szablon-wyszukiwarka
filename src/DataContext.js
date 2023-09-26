import React, {createContext, useState} from 'react';
import colors from "./scss/settings/_colors.module.scss"

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState("");
    const [backgroundColor, setBackgroundColor] = useState({
        lightBg: colors.lightBg,
        darkBg: colors.darkBg,
        lightGradient: colors.lightGradient,
        darkGradient: colors.darkGradient,
        lightFooter: colors.lightFooter,
        darkFooter : colors.darkFooter
    });

    const values = {
        darkMode,
        setDarkMode,
        backgroundColor,
        setBackgroundColor
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};