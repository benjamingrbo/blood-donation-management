import React from 'react'
import './SearchKrvneGrupe.css'
import { useState, useEffect } from 'react';

const SearchOpcine = ({setSearchOpcine}) => {
    const [opcine, setOpcine] = useState([]);

    const fetchOpcine = async () => {
        try {
            const response = await fetch('https://localhost:44385/api/Opcina/prikaziSveOpcine');
            if (!response.ok) throw Error('Did not recived expected data');
            const data = await response.json();
            console.log(data);
            setOpcine(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        (async () => await fetchOpcine())();
    }, [])

    return (
        <div className='formaDiv'>
            <label>Općina</label>
            <form action="#" className="searchForm">
                <select id="opcina"
                    onChange={(e) => {setSearchOpcine(e.target.value)}}>
                    <option value="">Sve</option>
                    {opcine.map((opcina) => (
                        <option key={opcina.opcinaId} value={opcina.nazivOpcine}>{opcina.nazivOpcine}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default SearchOpcine