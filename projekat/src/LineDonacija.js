import React from 'react'

const LineDonacija = ({donacija}) => {
  return (
    <tr key={donacija.donacijaId}>
            <td>{donacija.datum.substring(0,10)}</td>
            <td>{donacija.nazivUstanove}</td>
            <td>{donacija.opis}</td>
        </tr>
  )
}

export default LineDonacija