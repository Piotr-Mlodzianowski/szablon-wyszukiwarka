import React, {useContext} from 'react';
import {DataContext} from "../../../DataContext";
import SearchModal from "../searchModal/searchModal";

const SearchList = () => {
    const {selectedMedia, setSelectedMedia, currentItems, isModalOn, setIsModalOn} = useContext(DataContext);
    window.localStorage.setItem("media", JSON.stringify(selectedMedia));

    const handleClick = (media) => {
        setSelectedMedia(media);
        setIsModalOn(true);
    }

    return (

        <div className="container">

            {isModalOn && <SearchModal/>}

            <div className='media'>
                {currentItems.map((media) =>
                    <div className="selected" key={media.id} onClick={() => handleClick(media)}>
                        <img src={media.cover} alt="media cover" className='media__cover'/>
                        <div className='media__info'>
                            <div className='title'>{media.title}</div>
                            <div className='more'>więcej</div>
                        </div>
                    </div>)}
            </div>


        </div>
    )
};

export default SearchList;