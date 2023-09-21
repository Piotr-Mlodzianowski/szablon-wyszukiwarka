import React from 'react'

const Example = () => {

    return (
        <section className='example' id="example">
            <div className='container'>
                <div className='example__content'>
                    <div className='example__call'>
                        Na co czekasz?
                    </div>
                    <p className='example__paragraph'>Kliknij w przykłady lub skorzystaj z wyszukiwarki</p>

                    <div className='example__images'>
                            <img className='example__image' src={require('../../../images/example/image-from-rawpixel-id-8649331-jpeg.jpg')} alt='Compact disc'/>

                            <img className='example__image' src={require('../../../images/example/image-from-rawpixel-id-8649370-jpeg.jpg')} alt='Compact disc'/>

                            <img className='example__image' src={require('../../../images/example/image-from-rawpixel-id-8649458-jpeg.jpg')} alt='Compact disc'/>

                            <img className='example__image' src={require('../../../images/example/image-from-rawpixel-id-8668923-jpeg.jpg')} alt='Compact disc'/>

                            <img className='example__image' src={require('../../../images/example/image-from-rawpixel-id-9199110-jpeg.jpg')} alt='Compact disc'/>
                    </div>

                    <a href='#searchApp' className='example__link'>Przejdź do wyszukiwarki</a>
                    
                </div>
            </div>

        </section>

    )
};

export default Example;