import React from 'react'

const AboutTop = () => {
	return (
		<section className='about about__top' id='about'>
			<div className='container'>
				<div className='about__content'>
					<h2 className='about__heading'>
						Nullam ut <br />
						malesuada <br />
						libero
					</h2>
                    
					<div className='about__texts'>
						<p className='text'>
							Quisque lobortis nulla accumsan vulputate vulputate. Aliquam posuere interdum nisi, sed consectetur urna malesuada sed. Proin tristique nisi a dolor lacinia, eget lobortis purus egestas. Mauris porttitor metus at eleifend egestas. Nullam luctus, erat id suscipit auctor, nunc purus pretium erat, vel volutpat erat justo sed est. Maecenas nibh ligula, posuere.
						</p>

						<p className='text'>
							Sed sollicitudin ligula quis arcu luctus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vulputate, nisi et facilisis pharetra, ex nisi varius diam, eu vestibulum risus turpis eget.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutTop;
