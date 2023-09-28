import React, {createContext, useState} from 'react';
import colors from "./scss/settings/_colors.module.scss"
import media from "./components/searchApp/mediaObject/mediaObject";

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState("");
    const [backgroundColor, setBackgroundColor] = useState({
        lightBg: colors.lightBg,
        darkBg: colors.darkBg,
        lightGradient: colors.lightGradient,
        darkGradient: colors.darkGradient,
        lightFooter: colors.lightFooter,
        darkFooter: colors.darkFooter
    });
    const [allMedia, setAllMedia] = useState(media);
    const [chosenFilter, setChosenFilter] = useState("all");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [selectedMedia, setSelectedMedia] = useState("");

    const values = {
        darkMode,
        setDarkMode,
        backgroundColor,
        setBackgroundColor,
        allMedia, setAllMedia,
        chosenFilter,
        setChosenFilter,
        enteredTitle,
        setEnteredTitle,
        selectedMedia,
        setSelectedMedia
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};