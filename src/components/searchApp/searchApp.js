import React ,{useContext} from 'react';
import {DataContext} from "../../DataContext";
import Menu from "../homepage/menu/menu";
import SearchWindow from "./searchWindow/searchWindow";
import SearchPagination from "./searchPagination/searchPagination";
import SearchList from "./searchList/searchList";
import SearchFooter from "./searchFooter/searchFooter";

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
            <Menu startRoute={"/#opening"} aboutRoute={"/#about"} exampleRoute={"/#example"} searchRoute={"searchApp"}/>
            <SearchWindow/>
            <SearchPagination filteredByNameAndFilter={filteredByNameAndFilter} filter={chosenFilter}/>
            <SearchList/>
            <SearchFooter/>
        </>
    )
};

export default SearchApp;