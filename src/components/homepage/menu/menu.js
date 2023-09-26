import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";
import DarkMode from "../../darkMode";


const Menu = () => {
	const {darkMode, backgroundColor} = useContext(DataContext);

	const background = darkMode ? backgroundColor.darkBg : backgroundColor.lightBg;


	return (
		<header className='header' style={{backgroundColor: background}}>
			<div className='container'>

                <nav className='navigation'>
				<ul className='navList'>
					<li className='navList__element'>
						<a className='navList__link' href='#opening'>
							start
						</a>
					</li>
					<li className='navList__element'>
						<a className='navList__link' href='#about'>o nas
						</a>
					</li>
					<li className='navList__element'>
						<a className='navList__link' href='#example'>
							przykłady
						</a>
					</li>
					<li className='navList__element'>
						<a className='navList__link' href='searchApp'>
							wyszukiwarka
						</a>
					</li>
					<li className='navList__element'>
						<DarkMode/>
					</li>
				</ul>

				<div className='navLogo'>
                    <a className='navLogo__link' href="#opening">
					    <span className='navLogo__top'>wyszukiwarka</span>
					    <span className='navLogo__bottom'>szablon</span>
                    </a>
				</div>

                </nav>
			</div>
		</header>
	)
}

export default Menu
