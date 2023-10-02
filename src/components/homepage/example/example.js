import React, {useContext} from 'react'
import {DataContext} from "../../../DataContext";
import mediaObject from "../../searchApp/mediaObject/mediaObject";
import SearchModal from "../../searchApp/searchModal/searchModal";


const Example = () => {
    const {darkMode, backgroundColor, selectedMedia, setSelectedMedia, isModalOn, setIsModalOn} = useContext(DataContext);
    window.localStorage.setItem("media", JSON.stringify(selectedMedia));

    const background = darkMode ? backgroundColor.darkGradient : backgroundColor.lightGradient;

    const handleClick = (media) => {
        setSelectedMedia(media);
        setIsModalOn(true);
    }

    return (
        <section className='example' id="example" style={{backgroundImage: background}}>

            {isModalOn && <SearchModal/>}

            <div className='container'>
                <div className='example__content'>
                    <div className='example__call'>
                        Na co czekasz?
                    </div>
                    <p className='example__paragraph'>Kliknij w przykłady lub skorzystaj z wyszukiwarki</p>

                    <div className='example__images'>
                        <div className='example__images'>
                            {mediaObject.slice(0, 5).map((media) =>
                                <div key={media.id} onClick={() => handleClick(media)}>
                                    <img src={media.cover} alt="media cover" className='example__image'/>
                                </div>)}
                        </div>
                    </div>

                    <a href='searchApp' className='example__link'>Przejdź do wyszukiwarki</a>
                    
                </div>
            </div>

        </section>

    )
};

export default Example;