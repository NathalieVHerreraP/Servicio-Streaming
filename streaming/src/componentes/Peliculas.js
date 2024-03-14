import React from"react";
import '../css/peliculas.css';
import {Link} from "react-router-dom";


function Peliculas (){

    const [peliculas,setPeliculas] = React.useState(null);

    React.useEffect(() => { 
        fetch("/api/peliculas/")
        .then((res) => res.json())
        .then((peliculas) => setPeliculas(peliculas))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(peliculas);

    let peliculasElementos = peliculas.map((pelicula) => {
        let sum = 0;
        for (let i = 0; i < pelicula.estrellas_usuarios.length; i++) {
             sum = sum + pelicula.estrellas_usuarios[i].calificacion;
            
        }

        let avg = 0;
        avg = sum / pelicula.estrellas_usuarios.length;   
        return( 
            <div className="peliculas-info">
                <img src={pelicula.portada}  title={`Poster de la pelicula ${pelicula.titulo}`} class="portada" />
                <div className="peliculas-texto">
                    <p>{pelicula.titulo} {pelicula.anio}</p>
                    <p>{avg} ★</p>
                    <Link>
                    <img 
                        className="pelicula-icono" 
                        src={require(`../imagenes/iconoPlay.png`)} 
                        title="Ver"/>
                    </Link>
                    <Link to={"/PeliculaInfo/" + pelicula._id}>
                    <img 
                        className="pelicula-icono" 
                        src={require(`../imagenes/iconoCalificar.png`)} 
                        title="información"/>
                    </Link>
                </div>
            </div>
        );
    });    
    

    return(
        <div className="peliculas-contenedor">
            {peliculasElementos}
        </div>
    );
}

export default Peliculas;
