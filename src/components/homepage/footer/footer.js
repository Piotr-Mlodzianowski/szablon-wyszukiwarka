import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";
const Footer = () => {
	const {darkMode, backgroundColor} = useContext(DataContext);

	const background = darkMode ? backgroundColor.darkFooter : backgroundColor.lightFooter;


	return (
		<header className='footer' style={{backgroundColor: background}}>
			<div className='container'>

                <nav className='footer__navigation'>
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
				</ul>

				<div className='navLogo'>
                    <a className='navLogo__link' href="#opening">
					    <span className='navLogo__top'>wyszukiwarka</span>
					    <span className='navLogo__bottom'>szablon</span>
                    </a>
				</div>

                </nav>

				<small className='copyright'>&copy; 2023 szablon wyszukiwarka</small>
			</div>
		</header>
	)
}

export default Footer;
