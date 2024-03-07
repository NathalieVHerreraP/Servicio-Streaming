import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas.js';
import PeliculaInfo from './componentes/PeliculaInfo.js';
import {Routes, Route} from "react-router-dom";
import Navbar from "./componentes/Navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/Peliculas" element={<Peliculas/>}/>
          {/* <Route path="/Series" element={<Series/>}/>
          <Route path="/" element={<Carrusel/>}/> */}
          <Route path="/PeliculaInfo/:id" element={<PeliculaInfo/>}/>
          <Route path=""/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
