import React from 'react'


const Menu = () => {


	return (
		<header className='header'>
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
						<a className='navList__link' href='#examples'>
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
			</div>
		</header>
	)
}

export default Menu
