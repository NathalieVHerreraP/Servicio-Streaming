import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas.js';
import PeliculaInfo from './componentes/PeliculaInfo.js';

import Home from './componentes/Home.js';

import Series from './componentes/Series.js';

import {Routes, Route} from "react-router-dom";
import Navbar from "./componentes/Navbar.js";

import InsertComentario from './componentes/InsertComentario.js';
import EliminarComentario from './componentes/EliminarComentario.js';

import Home from "./componentes/Home.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/Peliculas" element={<Peliculas/>}/>
          <Route path="/Series" element={<Series />}/>
          <Route path="/PeliculaInfo/:id" element={<PeliculaInfo/>}/>
          <Route path="/InsertComentario/:id/:coment" element={<InsertComentario/>}/>
          <Route path="/EliminarComentario/:id/:usuarioID" element={<EliminarComentario/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path=""/>
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
