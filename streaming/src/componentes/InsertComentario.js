import React from "react";
import {useParams,Link, useNavigate} from 'react-router-dom';


function InsertComentario(){
    let params = useParams();
    const[comentario, setComentario] = React.useState("");
    const navigate = useNavigate();

    // console.log(params);

    // let body = {
    //     "usuario": "PruebaFrontend",
    //     "contenido": params.coment, 
    // }

    // console.log(body); 

    React.useEffect(() => {
        fetch(`/api/agregarComentario/${params.id}/PruebaFrontend/${params.coment}/${params.calif}`).
        then((res) => res.json()).
        then((comentario) => setComentario(comentario)).
        catch(error => {
            console.error(error);
        })
    },[]);

    if(comentario.respuesta){
        return (
            navigate(`/Peliculainfo/${params.id}`)
        );
    }

    

}

export default InsertComentario;