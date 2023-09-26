import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {DataProvider} from './DataContext';
import Homepage from './components/homepage/homepage'
import SearchApp from "./components/searchApp/searchApp";

function App() {
    return (
        <>
            <DataProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="searchApp" element={<SearchApp/>}/>
                    </Routes>
                </BrowserRouter>
            </DataProvider>
        </>
    )
}

export default App
