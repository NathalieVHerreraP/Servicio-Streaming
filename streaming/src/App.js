import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas.js';
import PeliculaInfo from './componentes/PeliculaInfo.js';
import Home from './componentes/Home.js';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/Peliculas" element={<Peliculas/>}/>
          <Route path="/Series"/>
         
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
