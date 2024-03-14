import React from "react";
import {useParams, Link} from 'react-router-dom';
import { useEffect } from "react";
import "../css/peliculaInfo.css";


function PeliculaInfo(){
    const params = useParams();
    const [pelicula,setPelicula] = React.useState(null);
    const [coment, setComent] = React.useState("");
    

    useEffect( () => {
        fetch(`/api/pelicula/${params.id}`)
            .then((res) => res.json())
            .then((pelicula) => setPelicula(pelicula))
            .catch(error => {
                console.error(error);
            });
    }, []);


    console.log(pelicula);

    let peliculaInfo = (
        <div className="pelicula-info" >
                <h2>{pelicula.titulo} {pelicula.anio}</h2>
                <img 
                    class="pelicula-img"
                    src={pelicula.portada} 
                    title={`Poster de la pelicula ${pelicula.titulo}`}
                />
                <p>Generos: {pelicula.genero.join(", ")}</p>
                <p>Calificación rotten tomatoes: {pelicula.calificacionRT}</p>
        </div>
    );

    let comentarioNuevo = (
        <div class="comentar">
            <label>
                Comnetario:
                <p>
                    <input 
                        type="text" 
                        value= {coment}
                        onChange ={(e) => setComent(e.target.value)}
                    />
                </p>
            </label>
            <Link to={"/InsertComentario/"+pelicula._id+"/"+coment} class="boton publicar">
                    <p>Publicar</p>
            </Link>
        </div>
    );

    let comentariosLista = pelicula.comentarios.map((comentario) => {
        return(
            <div className="comentario-comentar" >
                <div className="comentario" key={comentario._id}> 
                    <div > 
                        <p>{comentario.usuario} </p>
                        <p>{comentario.contenido}</p>
                    </div>
                    <Link to={"/EliminarComentario/"+pelicula._id+"/"+comentario._id} class="boton borrar">
                        <p>Eliminar Comentario</p>
                    </Link>
                </div>
                {comentarioNuevo}
            </div>
        );
    });

    return (
        <div className="contenedor">
            {peliculaInfo}
            {comentariosLista}
        </div>
    );
}

export default PeliculaInfo;