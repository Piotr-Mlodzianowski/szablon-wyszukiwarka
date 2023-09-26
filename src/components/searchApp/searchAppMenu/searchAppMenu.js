import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";
import DarkMode from "../../darkMode";

const SearchAppMenu = () => {
    const {darkMode, backgroundColor} = useContext(DataContext);

    const background = darkMode ? backgroundColor.darkBg : backgroundColor.lightBg;

    return (
        <header className='header' style={{backgroundColor: background}}>
            <div className='container'>

                <nav className='navigation'>
                    <ul className='navList'>
                        <li className='navList__element'>
                            <a className='navList__link' href='/'> ← powrót
                            </a>
                        </li>
                        <li className='navList__element'>
                            <DarkMode/>
                        </li>
                    </ul>

                    <div className='navLogo'>
                        <a className='navLogo__link' href="/">
                            <span className='navLogo__top'>wyszukiwarka</span>
                            <span className='navLogo__bottom'>szablon</span>
                        </a>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default SearchAppMenu;
