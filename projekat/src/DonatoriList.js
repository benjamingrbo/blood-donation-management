import React from 'react'
import LineDonator from './LineDonator'
import './DonatoriList.css'

const DonatoriList = ({ donatori, setDonatorZaEdit, handleDelete}) => {
    return (
        <table id="donoriTabela">
            <tr>
                <th>JMBG</th>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Broj knjižice</th>
                <th>Adresa stanovanja</th>
                <th>Općina</th>
                <th>Krvna grupa</th>
                <th>RH faktor</th>
                <th>Kontakt telefon</th>
                <th>Email</th>
                <th>Napomena</th>
                <th colSpan={6}>Akcije</th>
            </tr>

            {donatori.map((donator) => (
                <LineDonator key={donator.jmbg}
                    donator={donator}
                    setDonatorZaEdit={setDonatorZaEdit}
                    handleDelete={handleDelete}/>
            ))}

        </table>

    )
}

export default DonatoriList