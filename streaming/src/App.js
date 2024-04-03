import './App.css'
import Login from "./componentes/Login"
import Signup from "./componentes/Signup"
import Registro from "./componentes/Registro"
import Peliculas from './componentes/Peliculas.js';
import PeliculaInfo from './componentes/PeliculaInfo.js';
import Series from "./componentes/Series.js";
import UserHome from "./componentes/UserHome.js";
import Navbar from "./componentes/Navbar.js";
import InsertComentario from './componentes/InsertComentario.js';
import EliminarComentario from './componentes/EliminarComentario.js';
import Home from "./componentes/Home.js";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/Peliculas" element={<Peliculas/>}/>
          <Route path="/Series" element={<Series/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Registro/:email/:password" element={<Registro/>}/>
          <Route path="/Home/:email/:password" element={<UserHome/>}/>
          <Route path="/PeliculaInfo/:id" element={<PeliculaInfo/>}/>
          <Route path="/InsertComentario/:id/:coment/:calif" element={<InsertComentario/>}/>
          <Route path="/EliminarComentario/:id/:usuarioID" element={<EliminarComentario/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </header>
    </div>
  );
}





export default App;