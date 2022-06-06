import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NovaDonacija = () => {
    let  {jmbg}  = useParams();
    const navigate = useNavigate();
    
    
    const [ustanove, setUstanove] = useState([]);

    const fetchUstanove = async () => {
        try {
            const response = await fetch('https://localhost:44385/api/Ustanova/prikaziSveUstanove');
            if (!response.ok) throw Error('Did not recived expected data');
            const data = await response.json();
            console.log(data);
            setUstanove(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        
        (async () => await fetchUstanove())();
    }, [])

    var novaDonacija = {
        ustanovaId:-1,
        datum:"",
        opis:null
    }

    novaDonacija.jmbg = jmbg;


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(novaDonacija);

        try {

            fetch('https://localhost:44385/api/Donacija/unesiDonaciju', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaDonacija)
            }).then(() => {
              console.log('Nova donacija izvršena');
            })
          } catch (error) {
            console.log(error);
          }finally{
            navigate('/');
          }

    }


    return (
        <div className='inputFormaDiv'>
            <form >
                <label >JMBG</label>
                <input required
                    readOnly
                    type="text"
                    placeholder="Your name.."
                    value={jmbg}/>

                <label>Ustanova</label>
                <select id="ustanova"
                    required
                    onChange={(e) => { novaDonacija.ustanovaId = e.target.value }}>
                    <option disabled selected hidden>Izaberite ustanovu doniranja</option>
                    {ustanove.map((ustanova) => (
                        <option value={ustanova.ustanovaId}>{ustanova.nazivUstanove}</option>
                    ))}
                </select>
                
                <label>Datum doniranja</label>
                <input type="date"
                onChange={(e) => { novaDonacija.datum = e.target.value }}
                />

                <label >Opis</label>
                <input
                    type="text"
                    placeholder="npr. Akcija održana u prostorijama Fakulteta za saobraćaj i komunikacije" 
                    onChange={(e) => { novaDonacija.opis = e.target.value }}
                    />

                <input type="submit" onClick={(e) => handleSubmit(e)} 
                />
            </form>
        </div>

    )
}

export default NovaDonacija