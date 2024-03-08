import React from "react";
import {useParams} from 'react-router-dom';
import "../css/peliculaInfo.css";


function PeliculaInfo(){
    const params = useParams();
    const [pelicula,setPelicula] = React.useState(null);
    const [coment, setComent] = React.useState("");

    React.useEffect(() => {
        fetch(`/api/pelicula/${params.id}`)
        .then((res) => res.json())
        .then((pelicula) => setPelicula(pelicula))
        .catch(error => {
            console.error(error);
          });
    }, []);

    function InsertComent(event){
        let comentarioJson = {
            usuario: "PruebaFrontend", 
            contenido: coment, 
            fecha: new Date()
        }

        console.log(comentarioJson);

        React.useEffect(() => {
            fetch(`/api/comentario/${params.id}/${comentarioJson}`).
            catch(error => {
                console.error(error);
            })
        });
    }

    console.log(pelicula);

    let peliculaInfo = (
        <div className="pelicula-info">
                <h2>{pelicula.titulo} {pelicula.anio}</h2>
                <img 
                    src={pelicula.poster} 
                    title={`Poster de la pelicula ${pelicula.titulo}`}
                />
                <p>Generos: {pelicula.genero.join(", ")}</p>
                <p>Calificación rotten tomatoes: {pelicula.calificacionRT}</p>
            </div>
    );

    let comentariosLista = pelicula.comentarios.map((comentario) => {
        return(
            <div>
                <p>{comentario.usuario} </p>
                <p>{comentario.contenido}</p>
            </div>
        );
    });

    let comentarioNuevo = (
        <div>
            <form>
                <label onSubmit={InsertComent()}>
                    Comnetario:
                    <input 
                        type="text" 
                        value= {coment}
                        onChange ={(e) => setComent(e.target.value)}
                    />
                </label>
                <input type="submit" value="Publicar" />
            </form>
        </div>
    );

    return (
        <div>
            {peliculaInfo}
            {comentariosLista}
            {comentarioNuevo}
        </div>
    );
}

export default PeliculaInfo;