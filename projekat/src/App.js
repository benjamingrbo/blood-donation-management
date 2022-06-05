import './App.css';
import Nav from './Nav';
import NoviDonator from './NoviDonator';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pocetna from './Pocetna';
import { useState, useEffect } from 'react';
import HistorijaDonacija from './HistorijaDonacija';
import HistorijaBolesti from './HistorijaBolesti';
import NovaDonacija from './NovaDonacija';
import UrediDonora from './UrediDonora';
import NovaDijagnoza from './NovaDijagnoza';

function App() {

  const API_URL = 'https://localhost:44385/api/Osobe/prikaziSveOsobe';

  const [donatori, setDonatori] = useState([]);
  const [searchJmbg, setSearchJmbg] = useState('');
  const [searchKrvneGrupe, setSearchKrvneGrupe] = useState('');
  const [searchRHfaktora, setSearchRHfaktora] = useState('');
  const [searchOpcine, setSearchOpcine] = useState('');
  const [donatorZaEdit, setDonatorZaEdit] = useState({});


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not recived expected data');
        const listaDonatora = await response.json();
        console.log(listaDonatora);
        setDonatori(listaDonatora);
      } catch (error) {
        console.log(error.message);
      }
    }

    (async () => await fetchItems())();
  }, [])

  const handleDelete = (jmbg) => {
    try {
      let adresa = 'https://localhost:44385/api/Osobe/obrisiPodatak/' + jmbg;
      fetch(adresa, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status === 400) {
          alert('Nemoguće obrisati osobu');
        } else {
          alert('Osoba obrisana');
          window.location.reload(false);
        }
      })
    } catch (error) {
      alert('Neuspješno brisanje osobe');
    }
  }


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Pocetna donatori={donatori}
          searchKrvneGrupe={searchKrvneGrupe}
          setSearchKrvneGrupe={setSearchKrvneGrupe}
          searchRHfaktora={searchRHfaktora}
          setSearchRHfaktora={setSearchRHfaktora}
          setDonatorZaEdit={setDonatorZaEdit}
          handleDelete={handleDelete}
          searchJmbg={searchJmbg}
          setSearchJmbg={setSearchJmbg}
          searchOpcine={searchOpcine}
          setSearchOpcine={setSearchOpcine} />}></Route>
        <Route path="/noviDonator" element={<NoviDonator />}></Route>
        <Route path="/historijaDonacija/:jmbg" element={<HistorijaDonacija />}></Route>
        <Route path="/historijaBolesti/:jmbg" element={<HistorijaBolesti />}></Route>
        <Route path="/novaDonacija/:jmbg" element={<NovaDonacija />}></Route>
        <Route path="/urediDonora/:jmbg" element={<UrediDonora donatorZaEdit={donatorZaEdit} />}></Route>
        <Route path="/novaDijagnoza/:jmbg" element={<NovaDijagnoza/>}></Route>
      </Routes>

    </Router>

  );
}
export default App;
