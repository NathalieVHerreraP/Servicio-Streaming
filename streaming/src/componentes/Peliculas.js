import React from"react";
import '../css/peliculas.css';

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


    let peliculasElementos = peliculas.map(function(pelicula) {
        let sum = 0;
        for (let i = 0; i < pelicula.estrellas_usuarios.length; i++) {
             sum = sum + pelicula.estrellas_usuarios[i].calificacion;
            
        }
        let avg = 0;
        avg = sum / pelicula.estrellas_usuarios.length;

        console.log(avg);
        return( 
            <div className="peliculas-info">
                <img src={`data:image/gif;base64,`+ peliculas.portada} alt="" />
                <div className="peliculas-texto">
                    <p>{pelicula.titulo} {pelicula.anio}</p>
                    <p>{avg} ★</p>
                    <button className="pelicula-icono"><img className="pelicula-icono" src={require(`../imagenes/iconoPlay.png`)} title="Ver"/></button>
                    <button className="pelicula-icono"><img className="pelicula-icono" src={require(`../imagenes/iconoCalificar.png`)} Title="información"/></button>
                </div>
            </div>
        )
    });

    return(
        <div className="peliculas-contenedor">
            {peliculasElementos}
        </div>
    );
}

export default Peliculas;
