import React from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { RiFolderHistoryLine } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { AiFillFolderAdd } from 'react-icons/ai'

const LineDonator = ({ donator, setDonatorZaEdit, handleDelete }) => {
    let navigate = useNavigate();
    return (
        <tr key={donator.jmbg}>
            <td>{donator.jmbg}</td>
            <td>{donator.ime}</td>
            <td>{donator.prezime}</td>
            <td>{donator.brojKnjizice}</td>
            <td>{donator.adresa}</td>
            <td>{donator.nazivOpcine}</td>
            <td>{donator.krvnaGrupa}</td>
            <td>{donator.faktor}</td>
            <td>{donator.telefon}</td>
            <td>{donator.email}</td>
            <td>{donator.napomena}</td>
            <td style={{ width: "2%" }}><FiEdit2
                title="Uredite donora"
                onClick={() => {
                    setDonatorZaEdit(donator);
                    navigate(`/urediDonora/${donator.jmbg}`);
                }} /></td>
            <td><BsFillPlusCircleFill
                title="Unesite novu donaciju"
                onClick={() => {
                    navigate(`/novaDonacija/${donator.jmbg}`);
                }} /></td>
            <td><AiFillFolderAdd
                title="Unesite zapis u historiju"
                onClick={() => {
                    navigate(`/novaDijagnoza/${donator.jmbg}`);
                }} /></td>
            <td><RiFolderHistoryLine
                title="Prikaži historiju bolesti"
                onClick={() => {
                    navigate(`/historijaBolesti/${donator.jmbg}`);
                }} /></td>
            <td><FaHistory
                title="Prikaži historiju donacija"
                onClick={() => {
                    navigate(`/historijaDonacija/${donator.jmbg}`);
                }} /></td>
            <td><RiDeleteBin7Fill
                onClick={() => { handleDelete(donator.jmbg) }} /></td>
        </tr>

    )
}

export default LineDonator