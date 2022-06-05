import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LineDonacija from './LineDonacija';
import './DonatoriList.css'



const HistorijaDonacija = () => {

    let { jmbg } = useParams();
    const [donacijeDonora, setDonacijeDonora] = useState([]);

    useEffect(() => {
        const fetchDonacije = async () => {
            var adresa = 'https://localhost:44385/api/Donacija/donacijePoJMBG?jmbg=' + jmbg;
            try {
                const response = await fetch(adresa);
                if (!response.ok) throw Error('Did not recived expected data');
                const listaDonacija = await response.json();
                console.log(listaDonacija);
                setDonacijeDonora(listaDonacija);
            } catch (error) {
                console.log(error.message);
            }
        }

        (async () => await fetchDonacije())();
    }, [])


    return (
        <table id="donoriTabela">
            <tr>
                <th>Datum doniranja</th>
                <th>Nadležnost ustanove</th>
                <th>Opis</th>
            </tr>

            {
                donacijeDonora.map((donacija) => (
                    <LineDonacija 
                        donacija={donacija} />
                ))
            }

        </table >
    )
}

export default HistorijaDonacija