import React from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import "../css/peliculaInfo.css";


function PeliculaInfo(){
    const params = useParams();
    const [pelicula,setPelicula] = React.useState(null);
    const [coment, setComent] = React.useState("");
    const [calificacion, setCalificacion] = React.useState(50);
    const navigate = useNavigate();
    

    useEffect( () => {
        fetch(`/api/pelicula/${params.id}`)
            .then((res) => res.json())
            .then((pelicula) => setPelicula(pelicula))
            .catch(error => {
                console.error(error);
            });
    }, []);


    console.log(pelicula);

    console.log("comentario: " + coment + "calificacion: " + calificacion);



    // let peliculaInfo = (
    //     <div className="pelicula-info" >
    //             <h2>{pelicula.titulo} {pelicula.anio}</h2>
    //             <img 
    //                 class="pelicula-img"
    //                 src={pelicula.portada} 
    //                 title={`Poster de la pelicula ${pelicula.titulo}`}
    //             />
    //             <p>Generos: {pelicula.genero.join(", ")}</p>
    //             <p>Calificación rotten tomatoes: {pelicula.calificacionRT}</p>
    //     </div>
    // );


    let comentarioNuevo = (
        <div className="comentar">
            <label>
                Calificación:
                <p>{calificacion}</p>
                <p>
                    <input 
                        className="range" 
                        type="range" 
                        min="1" 
                        max="100" 
                        onChange={(e)=> setCalificacion(e.target.value)}
                    />
                </p>
            </label>
            <br/>
            <label>
                Comentario:
                <p>
                    <textarea
                        type="text" 
                        value= {coment}
                        onChange ={(e) => setComent(e.target.value)}
                        className= "textbox"
                    />
                </p>
            </label>
            {/* <Link to={"/InsertComentario/"+pelicula.id+"/"+coment+"/"+calificacion} class="boton publicar">
                <p>Publicar</p>
            </Link> */}
            
            <button onClick={() => {
                if(coment != "" && coment.length > 8){
                    navigate(`/InsertComentario/${params.id}/${coment}/${calificacion}`);
                }else{
                    alert("Debes dejar un comentario de mas de 8 letras");
                }
                }} 
            className="boton publicar">
            Publicar
            </button>
        </div>
    );


    // let comentariosLista = pelicula.comentarios.map((comentario) => {
    //     return(
    //             <div className="comentario" key={comentario._id}> 
    //                 <div > 
    //                     <p>{comentario.usuario} </p>
    //                     <p>{comentario.contenido}</p>
    //                 </div>
    //                 <Link to={"/EliminarComentario/"+pelicula._id+"/"+comentario._id} class="boton borrar">
    //                     <p>Eliminar Comentario</p>
    //                 </Link>
    //             </div>
    //     );
    // });


    return (
        <div className="contenedor">
            {/* {peliculaInfo} */}
            <div className="comentario-comentar">
                {/* {comentariosLista} */}
                {comentarioNuevo}
            </div>
        </div>
    );
}

export default PeliculaInfo;