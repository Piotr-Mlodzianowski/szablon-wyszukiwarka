import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from "../DataContext";

const DarkMode = () => {
    const {darkMode, setDarkMode, backgroundColor} = useContext(DataContext);
    const [showMsg, setShowMsg] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = backgroundColor.darkBg;
        } else {
            document.body.style.backgroundColor = backgroundColor.lightBg;
        }
    }, [darkMode])

    const handleClick = () => {
        setDarkMode((prevState) => !prevState);
    }


   // const bulbIcon = darkMode ? <img src={require('../images/light_bulb_light.png')} style={{width: "20px"}} alt="Enable dark mode"/> : <img src={require('../images/light_bulb_dark.png')} style={{width: "20px"}} alt="Disable dark mode"/>;
    //const icons = darkMode ? <img src={require('../images/day-and-night.png')} style={{width: "20px"}} alt="Enable dark mode"/> : <img src={require('../images/night.png')} style={{width: "20px"}} alt="Disable dark mode"/>;

    const icons = darkMode ? <img src={require('../images/light_bulb_light.png')} style={{width: "30px"}} alt="Enable dark mode"/> : <img src={require('../images/light_bulb_dark.png')} style={{width: "30px"}} alt="Disable dark mode"/>;


    return (
        <div className="bulb" onClick={handleClick} onMouseEnter={() => setShowMsg(true)} onMouseLeave={() => setShowMsg(false)} style={{cursor: "pointer"}}>
            {icons}
            {showMsg && <div className='bulb__msg'>Przełącz tryb kolorów</div>}
        </div>
    );
};

export default DarkMode;
