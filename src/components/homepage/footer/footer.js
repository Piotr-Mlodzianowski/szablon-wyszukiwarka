import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";

const Footer = () => {
    const {darkMode, backgroundColor} = useContext(DataContext);

    const background = darkMode ? backgroundColor.darkFooter : backgroundColor.lightFooter;


    return (
        <footer className='footer' style={{backgroundColor: background}}>
            <div className='container'>
                <nav className='footer-navigation'>
                    <div className='navigation__logo'>
                        <a className='logo' href="#opening">
                            wyszukiwarka
                            <span className='logo logo--bottom'>szablon</span>
                        </a>
                    </div>
                </nav>
                <small className='copyright'>&copy; 2023 szablon wyszukiwarka</small>
            </div>
        </footer>
    )
}

export default Footer;
