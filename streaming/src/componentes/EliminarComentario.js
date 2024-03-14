import React from "react";
import {useParams, Link} from "react-router-dom";

function EliminarComentario(){
    let params = useParams();
    const[comentario, setComentario] = React.useState("");

    console.log(params);

    let body = {
        "usuario": params.usuarioID,
        "id": params.id, 
    }

    console.log(body); 

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/eliminarComentario/${params.id}/${params.usuarioID}`).
        then((res) => res.json()).
        then((comentario) => setComentario(comentario)).
        catch(error => {
            console.error(error);
        })
    },[]);

    return (
        <div>
            <p>{comentario.respuesta}</p>
            <Link to={"/PeliculaInfo/" + params.id}><p>Regresar</p></Link>
        </div>
    );
}

export default EliminarComentario;
