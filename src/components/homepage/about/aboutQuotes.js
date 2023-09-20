import React from 'react'

const AboutQuotes = () => {
	return (
		<>
			<section className='quotes'>
				<div className='container'>
					<div className='quotes__content'>
						<div className='quote__box'>
							<div className='quote__text'> "Maecenas bibendum felis id dapibus consectetur" </div>
							<div className='quote__game'> - Lorem ipsum</div>
						</div>

						<div className='quote__box'>
							<div className='quote__text'> "Donec sed pretium leo. Morbi iaculis venenatis" </div>
							<div className='quote__game'> - Lorem ipsum</div>
						</div>

						<div className='quote__box'>
							<div className='quote__text'> "Nam vehicula, nisl ac placerat aliquam, libero nisl malesuada" </div>
							<div className='quote__game'> - Lorem ipsum</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default AboutQuotes;
