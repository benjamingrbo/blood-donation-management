import React from 'react'
import './SearchKrvneGrupe.css'


const SearchRHFaktora = ({ searchRHfaktora, setSearchRHfaktora }) => {
    return (
        <div className='formaDiv'>
            <label>Unesite RH faktor</label>
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    id='search'
                    type='text'
                    role='searchbox'
                    placeholder='+/-'
                    value={searchRHfaktora}
                    onChange={(e) => setSearchRHfaktora(e.target.value)}
                ></input>


            </form>
        </div>
    )
}

export default SearchRHFaktora