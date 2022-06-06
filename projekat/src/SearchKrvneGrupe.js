import React from 'react'
import './SearchKrvneGrupe.css'

const SearchKrvneGrupe = ({ searchKrvneGrupe, setSearchKrvneGrupe }) => {
    return (
        <div className='formaDiv'>
            <label>Krvna grupa</label>
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    id='search'
                    type='text'
                    role='searchbox'
                    placeholder='A'
                    value={searchKrvneGrupe}
                    onChange={(e) => setSearchKrvneGrupe(e.target.value)}
                ></input>

            </form>
        </div>
    )
}

export default SearchKrvneGrupe
