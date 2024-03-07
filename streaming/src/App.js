import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas.js';
import PeliculaInfo from './componentes/PeliculaInfo.js';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/Peliculas" element={<Peliculas/>}/>
          <Route path="/Series"/>
          <Route path="/*"/>
          <Route path=""/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
