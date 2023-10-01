import React, {useContext} from 'react';
import {DataContext} from "../../../DataContext";

const SearchList = () => {
    const {selectedMedia, setSelectedMedia, currentItems} = useContext(DataContext);
    window.localStorage.setItem("media", JSON.stringify(selectedMedia));

    return (
        <div className="container">
            <div className='media'>
                {currentItems.map((media) =>
                    <a href="/wybranaGra" className="selected" key={media.id} onClick={() => setSelectedMedia(media)}>
                        <img src={media.cover} alt="media cover" className='media__cover'/>
                        <div className='media__info'>
                            <div className='title'>{media.title}</div>
                            <div className='more'>więcej</div>
                        </div>
                    </a>)}
            </div>
        </div>
    )
};

export default SearchList;