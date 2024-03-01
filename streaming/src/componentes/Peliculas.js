import React from"react";
import '../css/peliculas.css';

function Peliculas (){
    return(
        <div className="peliculas-contenedor">
            <div className="peliculas-info">
                <img src="" alt="" />
                <div className="peliculas-texto">
                    <p>Pelicula Año</p>
                    <p>calificación</p>
                    <button className="pelicula-icono"><img className="pelicula-icono" src={require(`../imagenes/iconoPlay.png`)} title="Ver"/></button>
                    <button className="pelicula-icono"><img className="pelicula-icono" src={require(`../imagenes/iconoCalificar.png`)} Title="Calificar"/></button>
                </div>
            </div>
        </div>
    );
}

export default Peliculas;