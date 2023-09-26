import React from 'react';

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
    return (
        <input className='form__input' type='text' placeholder='wpisz tytuł'/>
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
    return (
        <div className='radios'>
            <div className='radio__container'>
                <input className='radio' type="radio" id="all" name="platform" value="all"/>
                <label className='radio__label' htmlFor="all">Wszystkie</label>
            </div>
            <div className='radio__container'>
                <input className='radio' type="radio" id="filter1" name="platform" value="filter1"/>
                <label className='radio__label' htmlFor="filter1">Filtr 1</label>
            </div>
            <div className='radio__container'>
                <input className='radio' type="radio" id="filter2" name="platform" value="filter2"/>
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