import React from 'react'

const AboutMore = () => {
	return (
		<section className='about__more' id='more'>
			<div className='container'>
				<div className='more__content'>
					<div className='content__left'>
						<h2 className='left__heading'>Chcesz dowiedzieć się więcej?</h2>
						<p className='left__text'>Obejrzyj materiały wideo</p>
					</div>
                    <ul className='content__right'>
                        <li><a href="#" target="_blank" rel="noreferrer" className='content__right--button'>Materiał wideo 1</a></li>
                        <li><a href="#" target="_blank" rel="noreferrer" className='content__right--button'>Materiał wideo 2</a></li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutMore;
