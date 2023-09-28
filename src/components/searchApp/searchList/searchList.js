import React, {useContext} from 'react';
import {DataContext} from "../../../DataContext";

const SearchList = () => {
    const {allMedia, chosenFilter, enteredTitle, selectedMedia, setSelectedMedia} = useContext(DataContext);

    let filteredByFilter = allMedia
    if (chosenFilter !== "all") {
        filteredByFilter = allMedia.filter((media) => media.platform === chosenFilter);
    }

    let filteredByFilterAndName = filteredByFilter;
    if (enteredTitle !== "") {
        filteredByFilterAndName = filteredByFilter.filter((media) => media.title.toUpperCase().includes(enteredTitle.toUpperCase()));
    }

    window.localStorage.setItem("media", JSON.stringify(selectedMedia));


    return (
        <div className="container">
            <div className='list__content'>
                <div className='mediaList'>
                    {filteredByFilterAndName.map((media) =>
                        <a href="/wybraneMedia" className="media" key={media.id} onMouseOver={() => setSelectedMedia(media)}>
                            {media.cover}
                        </a>)}
                </div>
            </div>
        </div>
    )
};

export default SearchList;