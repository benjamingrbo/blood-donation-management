import React from 'react'

const SearchJmbg = ({searchJmbg, setSearchJmbg}) => {
  return (
    <div className='formaDiv'>
            <label>Unesite JMBG</label>
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    id='search'
                    type='text'
                    role='searchbox'
                    placeholder='1007170061'
                    value={searchJmbg}
                    onChange={(e) => setSearchJmbg(e.target.value)}
                ></input>

            </form>
        </div>
  )
}

export default SearchJmbg