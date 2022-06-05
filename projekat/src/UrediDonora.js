import React, { useState, useEffect } from 'react'


const UrediDonora = ({ donatorZaEdit }) => {

    const [opcine, setOpcine] = useState([]);
    const [krvneGrupe, setKrvneGrupe] = useState([]);
    const [faktori, setFaktore] = useState([]);
    const jmbgRef = React.useRef();
    const imeRef = React.useRef();
    const prezimeRef = React.useRef();
    const brojKnjiziceRef = React.useRef();
    const adresaRef = React.useRef();
    const opcinaRef = React.useRef();
    const krvnaGrupaRef = React.useRef();
    const faktorRef = React.useRef();
    const telefonRef = React.useRef();
    const emailRef = React.useRef();
    const napomenaRef = React.useRef();


    var noviPodaciODonoru = {
        jmbg:"",
        ime: "",
        prezime: "",
        brojKnjizice: "",
        adresa: "",
        opcinaId: 0,
        krvnaGrupaId: 0,
        faktorId: 0,
        telefon: "",
        email: "",
        napomena: ""
    }

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


    const fetchKrvneGrupe = async () => {
        try {
            const response = await fetch('https://localhost:44385/api/KrvnaGrupa/prikaziSveKrvneGrupe');
            if (!response.ok) throw Error('Did not recived expected data');
            const data = await response.json();
            console.log(data);
            setKrvneGrupe(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const fetchFaktore = async () => {
        try {
            const response = await fetch('https://localhost:44385/api/RhFaktor/prikaziSveRhFaktore');
            if (!response.ok) throw Error('Did not recived expected data');
            const data = await response.json();
            console.log(data);
            setFaktore(data);
        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        (async () => await fetchOpcine())();
        (async () => await fetchKrvneGrupe())();
        (async () => await fetchFaktore())();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        noviPodaciODonoru.jmbg = jmbgRef.current.value;
        noviPodaciODonoru.ime = imeRef.current.value;
        noviPodaciODonoru.prezime = prezimeRef.current.value;
        noviPodaciODonoru.brojKnjizice = brojKnjiziceRef.current.value;
        noviPodaciODonoru.adresa = adresaRef.current.value;
        noviPodaciODonoru.opcinaId = parseInt(opcinaRef.current.value);
        noviPodaciODonoru.krvnaGrupaId = parseInt(krvnaGrupaRef.current.value);
        noviPodaciODonoru.faktorId = parseInt(faktorRef.current.value);
        noviPodaciODonoru.telefon = telefonRef.current.value;
        noviPodaciODonoru.email = emailRef.current.value;
        noviPodaciODonoru.napomena = napomenaRef.current.value;

        console.log(noviPodaciODonoru);
        updateDonora(noviPodaciODonoru);

    }

    const updateDonora = (osoba) =>{
        try {

            let adresa = 'https://localhost:44385/api/Osobe/izmijeni/' + osoba.jmbg;

            fetch(adresa, {
              method: 'PUT',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(osoba)
            }).then(() => {
              console.log('Donor ažuriran');
            })
            window.location.reload(false);//za rr nakon submita
          } catch (error) {
            console.log(error);
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
                    defaultValue={donatorZaEdit.jmbg} 
                    ref={jmbgRef}/>

                <label >Ime</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.ime}
                    ref={imeRef} />

                <label >Prezime</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.prezime}
                    ref={prezimeRef} />

                <label >Broj zdravstvene knjižice</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.brojKnjizice}
                    ref={brojKnjiziceRef} />

                <label >Adresa</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.adresa}
                    ref={adresaRef} />

                <label >Opcina</label>
                <select id="opcina"
                    required
                    ref={opcinaRef}>
                    {opcine.map((opcina) => (
                        <option selected={donatorZaEdit.nazivOpcine === opcina.nazivOpcine}
                        value={opcina.opcinaId}>{opcina.nazivOpcine}</option>
                    ))}
                </select>

                <label >Krvna grupa</label>
                <select id="krvnaGrupa"
                    required
                    ref={krvnaGrupaRef}>
                    {krvneGrupe.map((krvnaGrupa) => (
                        <option selected={donatorZaEdit.krvnaGrupa === krvnaGrupa.krvnaGrupa1}
                        value={krvnaGrupa.krvnaGrupaId}>{krvnaGrupa.krvnaGrupa1}</option>
                    ))}
                </select>

                <label >RH faktor</label>
                <select id="RHfaktor"
                    required
                    ref={faktorRef}>
                    {faktori.map((faktor) => (
                        <option selected={donatorZaEdit.faktor === faktor.faktor}
                        value={faktor.faktorId}>{faktor.faktor}</option>
                    ))}
                </select>

                <label >Telefon</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.telefon}
                    ref={telefonRef} />

                <label >Email</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.email}
                    ref={emailRef} />

                <label >Napomena</label>
                <input required
                    type="text"
                    placeholder="Your name.."
                    defaultValue={donatorZaEdit.napomena}
                    ref={napomenaRef} />

                <input type="submit" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>

    )
}

export default UrediDonora