import React from 'react'
import Wave from 'react-wavify'

const Opening = () => {
	return (
		<>
			<section className='opening' id='opening'>
				<div className='opening__content'>
					<h1 className='content__heading'>Szablon aplikacji do wyszukiwania mediów</h1>

					<p className='content__paragraph'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et tristique justo, ut volutpat.
					</p>

					<div className='content__buttons'>
						<a href='#about' className='content__button'>
							O nas
						</a>
						<a href='searchApp' className='content__button'>
							Wyszukiwarka
						</a>
					</div>
				</div>
				<img
					className='opening__image'
					src={require('../../../images/PinClipart.com_dvd-clip-art_5376605.png')}
					alt='Compact disc'
				/>
			</section>
			<Wave
				fill='#5E81AC'
				paused={false}
				style={{ display: 'flex' }}
				options={{ height: 80, amplitude: 20, speed: 0.10, points: 20 }}
			/>
		</>
	);
};

export default Opening;
