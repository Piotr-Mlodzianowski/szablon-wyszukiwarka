import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";
import DarkMode from "../../darkMode";


const Menu = ({startRoute, aboutRoute, exampleRoute, searchRoute}) => {
    const {darkMode, backgroundColor} = useContext(DataContext);

    const background = darkMode ? backgroundColor.darkBg : backgroundColor.lightBg;


    return (
        <header className='header' style={{backgroundColor: background}}>
            <div className='container'>

                <nav className='navigation'>
                    <ul className='navigation__list'>
                        <li className='list__item'>
                            <a className='list__link' href={startRoute}>
                                start
                            </a>
                        </li>
                        <li className='list__item'>
                            <a className='list__link' href={aboutRoute}>o nas
                            </a>
                        </li>
                        <li className='list__item'>
                            <a className='list__link' href={exampleRoute}>
                                przykłady
                            </a>
                        </li>
                        <li className='list__item'>
                            <a className='list__link' href={searchRoute}>
                                wyszukiwarka
                            </a>
                        </li>
                        <li className='list__item'>
                            <DarkMode/>
                        </li>
                    </ul>

                    <div className='navigation__logo'>
                        <a className='logo' href={startRoute}>
                            wyszukiwarka
                            <span className='logo logo--bottom'>szablon</span>
                        </a>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Menu
