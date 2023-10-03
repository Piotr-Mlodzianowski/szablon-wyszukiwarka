import React, {useContext} from 'react';
import {slide as Burger} from 'react-burger-menu'
import DarkMode from "../../darkMode";
import {DataContext} from "../../../DataContext";


const BurgerMenu = ({startRoute, aboutRoute, exampleRoute, searchRoute}) => {
    const {darkMode, backgroundColor} = useContext(DataContext);

    const background = darkMode ? backgroundColor.darkBg : backgroundColor.lightBg;

    return (
        <div className='burger-menu' style={{backgroundColor: background}}>

            <div className='navigation__logo'>
                <a className='logo' href={startRoute}>
                    wyszukiwarka
                    <span className='logo logo--bottom'>szablon</span>
                </a>
            </div>

            <div className='menu'>
                <div className='burger-dark'><DarkMode/></div>
                <Burger right>
                    <a className="menu-item" href={startRoute}>start</a>
                    <a className="menu-item" href={aboutRoute}>o nas</a>
                    <a className="menu-item" href={exampleRoute}>przykłady</a>
                    <a className="menu-item" href={searchRoute}>wyszukiwarka</a>
                </Burger>
            </div>
        </div>
    );
};

export default BurgerMenu;