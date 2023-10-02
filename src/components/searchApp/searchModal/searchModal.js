import React, {useContext, useState} from "react";
import {DataContext} from "../../../DataContext";

const SearchModal = () => {
    const {darkMode, backgroundColor, setIsModalOn} = useContext(DataContext);
    const media = JSON.parse(window.localStorage.getItem("media"));

    const styles = {
        background: {
            backgroundImage: darkMode ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` : `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
        },
        artwork: {
            backgroundImage: `url(${media.artwork}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        },
        artback: {
            backgroundImage: darkMode ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${media.artwork}` : `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${media.artwork}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "80%",
            height: "80%"
        }

    }


    const frostBackground = darkMode ? backgroundColor.darkFrost : backgroundColor.lightFrost;
    const background = darkMode ? backgroundColor.darkBg : backgroundColor.lightBg;

    return (
        <>

            <div className='media-page' style={styles.background}>

                <div className='artwork' style={styles.artback}>
                    <div className='media-background' style={{backgroundColor: frostBackground}}>
                        <div className='container'>

                            <div className='media-content'>
                                <div className='media-info'>
                                    <div className='media-title'>{media.title}</div>
                                    <p>consectetur magna pharetra ultrices</p>
                                    <p>Fusce elementum sapien nisi, ut viverra ex rhoncus at. </p>
                                </div>

                                <div className='media-visuals'>
                                    <img src={media.cover} className='visuals-cover' alt='game-cover'/>
                                    <div className='quote-container' style={{backgroundColor: background}}>
                                        <div className='artwork' style={styles.artwork}></div>
                                        <div className='quote__box'>
                                            <div className='quote__text'> "Aliquam tristique varius est sed aliquam"</div>
                                            <div className='quote__media'> - Mauris eu iaculis diam</div>
                                        </div>
                                    </div>
                                    <Iframe artwork={media.artwork} video={media.movie}/>
                                </div>

                                <div className='game-buttons'>
                                    <div className='game-buttons__button' onClick={() => setIsModalOn(false)}><img
                                        className='button-icon'
                                        alt='btn icon'
                                        src={require("../../../images/icons8-back-arrow-30.png")}/>Powrót
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};

export default SearchModal;


const Iframe = ({artwork, video}) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    function playVideo() {
        setIsVideoPlaying(true);
    }

    return (
        <div className='custom-video-container' onClick={playVideo}>
            {!isVideoPlaying && (
                <>
                    <div className='custom-play-button'></div>
                    <img src={artwork} alt='Custom Thumbnail' className='custom-thumbnail'/>
                </>
            )}

            {isVideoPlaying && (
                <iframe className='visuals-video' width="560" height="315"
                        src={video}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                        title='YouTube video player'
                ></iframe>
            )}
        </div>
    );
};