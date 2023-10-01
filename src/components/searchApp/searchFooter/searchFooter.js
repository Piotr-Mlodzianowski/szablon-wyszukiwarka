import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";

const SearchFooter = () => {
    const {darkMode, backgroundColor} = useContext(DataContext);
    const background = darkMode ? backgroundColor.darkFooter : backgroundColor.lightFooter;

    return (
        <footer className='search-footer' style={{backgroundColor: background}}>
            <div className='container'>
                <div className='search-footer__logo'>
                    <a className='logo' href="/">
                        wyszukiwarka
                        <span className='logo logo--bottom'>szablon</span>
                    </a>
                </div>

                <small className='search-footer__copyright'>&copy; 2023 szablon wyszukiwarka</small>
            </div>
        </footer>
    )
}

export default SearchFooter;
