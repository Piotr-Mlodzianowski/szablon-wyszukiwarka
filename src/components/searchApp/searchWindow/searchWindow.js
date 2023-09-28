import React, {useContext} from 'react';
import {DataContext} from "../../../DataContext";

const SearchWindow = () => {

    return (
        <>
            <div className="container">
                <div className="form__container">
                    <SearchForm/>
                </div>
            </div>
        </>
    )
};

const SearchForm = () => {
    return (
        <form className='form'>
            <SearchBar/>
            <SearchButtons/>
        </form>
    )
}

const SearchBar = () => {
    const {setEnteredTitle} = useContext(DataContext);


    return (
        <input className='form__input' type='text' placeholder='wpisz tytuł' onChange={(e) => setEnteredTitle(e.target.value)}/>
    )
}

const SearchButtons = () => {
    return (
        <div className='buttons'>
            <SearchRadios/>
            <SearchAddButton/>
        </div>
    )
}


const SearchRadios = () => {
    const {setChosenFilter} = useContext(DataContext);

    return (
        <div className='radios'>
            <div className='radio__container'>
                <input className='radio' type="radio" id="all" name="platform" value="all" onChange={(e) => setChosenFilter(e.target.value)}/>
                <label className='radio__label' htmlFor="all">Wszystkie</label>
            </div>
            <div className='radio__container'>
                <input className='radio' type="radio" id="filter1" name="platform" value="filter1" onChange={(e) => setChosenFilter(e.target.value)}/>
                <label className='radio__label' htmlFor="filter1">Filtr 1</label>
            </div>
            <div className='radio__container'>
                <input className='radio' type="radio" id="filter2" name="platform" value="filter2" onChange={(e) => setChosenFilter(e.target.value)}/>
                <label className='radio__label' htmlFor="filter2">Filtr 2</label>
            </div>
        </div>
    )
}

const SearchAddButton = () => {
    return (
        <div className='addBtn'> + dodaj \ zgłoś poprawkę</div>
    )
}

export default SearchWindow;