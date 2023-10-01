import React ,{useContext} from 'react';
import {DataContext} from "../../DataContext";
import SearchAppMenu from "./searchAppMenu/searchAppMenu";
import SearchWindow from "./searchWindow/searchWindow";
import SearchList from "./searchList/searchList";

const SearchApp = () => {
    const {
        allMedia,
        chosenFilter,
        enteredTitle,
    } = useContext(DataContext);

    let filteredByName = allMedia;
    if (enteredTitle !== "") {
        filteredByName = allMedia.filter((media) => media.title.toUpperCase().includes(enteredTitle.toUpperCase()));
    }

    let filteredByNameAndFilter = filteredByName;
    if (chosenFilter !== "ALL") {
        filteredByNameAndFilter = filteredByName.filter((media) => media.platform === chosenFilter);
    }

    return (
        <>
            <SearchAppMenu/>
            <SearchWindow/>
            <SearchList/>
        </>
    )
};

export default SearchApp;