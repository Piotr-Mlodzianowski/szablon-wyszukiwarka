import React from 'react';
import SearchAppMenu from "./searchAppMenu/searchAppMenu";
import SearchWindow from "./searchWindow/searchWindow";
import SearchList from "./searchList/searchList";

const SearchApp = () => {

    return (
        <>
            <SearchAppMenu/>
            <SearchWindow/>
            <SearchList/>
        </>
    )
};

export default SearchApp;