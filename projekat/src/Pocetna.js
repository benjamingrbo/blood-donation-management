import React from 'react'
import DonatoriList from './DonatoriList'
import SearchKrvneGrupe from './SearchKrvneGrupe'
import SearchRHFaktora from './SearchRHFaktora'
import SearchJmbg from './SearchJmbg'
import SearchOpcine from './SearchOpcine'



const Pocetna = ({ donatori, searchKrvneGrupe, setSearchKrvneGrupe, searchRHfaktora, setSearchRHfaktora, setDonatorZaEdit, handleDelete, searchJmbg, setSearchJmbg, searchOpcine, setSearchOpcine}) => {
  return (
    <div id='pocetnaContent'> 
      <SearchJmbg searchJmbg={searchJmbg} setSearchJmbg={setSearchJmbg}/>
      <SearchKrvneGrupe searchKrvneGrupe={searchKrvneGrupe}
      setSearchKrvneGrupe={setSearchKrvneGrupe}/>
      <SearchRHFaktora 
      searchRHfaktora={searchRHfaktora}
      setSearchRHfaktora={setSearchRHfaktora}/>
      <SearchOpcine setSearchOpcine={setSearchOpcine}/>
      <DonatoriList
        donatori={donatori.filter(donator => ((donator.krvnaGrupa).toLowerCase()).includes(searchKrvneGrupe.toLowerCase())
          && ((donator.faktor).toLowerCase()).includes(searchRHfaktora.toLowerCase())
          && ((donator.jmbg).toLowerCase()).includes(searchJmbg.toLowerCase())
          && ((donator.nazivOpcine).toLowerCase()).includes(searchOpcine.toLowerCase())
          )}
          setDonatorZaEdit={setDonatorZaEdit}
          handleDelete={handleDelete}
      />
    </div>

  )
}

export default Pocetna