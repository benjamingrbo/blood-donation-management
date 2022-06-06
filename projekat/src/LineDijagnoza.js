import React from 'react'

const LineDijagnoza = ({dijagnoza}) => {
  return (
    <tr key={dijagnoza.datum}>
            <td>{dijagnoza.datum.substring(0,10)}</td>
            <td>{dijagnoza.dijagnoza}</td>
        </tr>
  )
}

export default LineDijagnoza