import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const NovaDijagnoza = () => {
    let  {jmbg}  = useParams();
    const navigate = useNavigate();

    var novaDijagnoza = {
        jmbg:jmbg,
        dijagnoza:"",
        datum:""
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(novaDijagnoza);

        try {

            fetch('https://localhost:44385/api/Historija/unesiDijagnozu', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaDijagnoza)
            }).then(() => {
              console.log('Upis u historiju izvršen !');
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
                    placeholder=""
                    value={jmbg}/>

                <label>Dijagnoza</label>
                <input required
                    type="text"
                    placeholder="Unesite opis dijagnoze"
                    onChange={(e)=>{novaDijagnoza.dijagnoza = e.target.value}}
                    />

                
                <label>Datum upisa u historiju</label>
                <input type="date"
                onChange={(e) => { novaDijagnoza.datum = e.target.value }}
                />

                <input type="submit" onClick={(e) => handleSubmit(e)} 
                />
            </form>
        </div>

  )
}

export default NovaDijagnoza