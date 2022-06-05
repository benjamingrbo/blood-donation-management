import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LineDijagnoza from './LineDijagnoza';


const HistorijaBolesti = () => {
    let { jmbg } = useParams();
    const[historijaBolestiDonora, setHistorijaBolestiDonora] = useState([]);
    
    useEffect(() => {
        const fetchHistoriju = async () => {
            var adresa = 'https://localhost:44385/api/Historija/historijaPoJmbg?jmbg=' + jmbg;
            try {
                const response = await fetch(adresa);
                if (!response.ok) throw Error('Did not recived expected data');
                const listaHistorije = await response.json();
                console.log(listaHistorije);
                setHistorijaBolestiDonora(listaHistorije);
            } catch (error) {
                console.log(error.message);
            }
        }

        (async () => await fetchHistoriju())();
    }, [])
    
  return (
    <table id="donoriTabela">
    <tr>
        <th>Datum dijagnoze</th>
        <th>Dijagnoza</th>
    </tr>

    {
        historijaBolestiDonora.map((dijagnoza) => (
            <LineDijagnoza key={dijagnoza.datum}
                dijagnoza={dijagnoza} />
        ))
    }

</table >
    
  )
}

export default HistorijaBolesti