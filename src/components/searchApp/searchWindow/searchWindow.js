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
    const {chosenFilter, setChosenFilter} = useContext(DataContext);

    return (
        <fieldset className='radios'>
            <SearchRadio label="Wszystkie" value={"ALL"} checked={chosenFilter === "ALL"}
                         onChange={() => setChosenFilter("ALL")}/>
            <SearchRadio label="PC" value={"PC"} checked={chosenFilter === "PC"}
                         onChange={() => setChosenFilter("PC")}/>
            <SearchRadio label="PSX" value={"PSX"} checked={chosenFilter === "PSX"}
                         onChange={() => setChosenFilter("PSX")}/>
        </fieldset>
    )
}

const SearchRadio = ({label, value, checked, onChange}) => {

    return (
        <div className='radio__container'>
            <input className='radio' type="radio" id={value} checked={checked}
                   onChange={onChange}/>
            <label className='radio__label' htmlFor={value}>{label}</label>
        </div>
    );
};

const SearchAddButton = () => {
    return (
        <div className='addBtn'> + dodaj \ zgłoś poprawkę</div>
    )
}

export default SearchWindow;