import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import {Link, useParams, } from "react-router-dom";

function Registro (){
    let params = useParams();
    const location=useLocation();
    const [response,setResponse]= React.useState('');
    const navigate = useNavigate();

    console.log(params);

    React.useEffect(() => {
        const requestOptions = {
            method: 'POST',
        };
        fetch(`/api/signup/:${params.email}/:${params.password}`,requestOptions)
        .then((res) => res.json())
        .then((response) => setResponse(response))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(response);

    if(response.respuesta){
        return(
            navigate(`/Login`, alert("Se registró con éxito"))
        );
    }else {
        return(
            navigate(`/Signup`, alert("Registro falló, intente de nuevo"))
        );
    }

}

export default Registro;