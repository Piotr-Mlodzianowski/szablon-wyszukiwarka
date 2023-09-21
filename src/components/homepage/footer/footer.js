import React from 'react'
const Footer = () => {


	return (
		<header className='footer'>
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
						<a className='navList__link' href='#searchApp'>
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
