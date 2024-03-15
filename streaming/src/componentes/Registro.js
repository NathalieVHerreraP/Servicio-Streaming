import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import {Link, useParams, } from "react-router-dom";

function Registro (){
    let params = useParams();
    const location=useLocation();
    const [response,setResponse]= React.useState('');
    let bienvenida = (<></>);

    console.log(params);

    React.useEffect(() => {
        const requestOptions = {
            method: 'POST',
        };
        fetch(`http://localhost:3000/api/signup/:${params.email}/:${params.password}`,requestOptions)
        .then((res) => res.json())
        .then((response) => setResponse(response))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(response);

    if(response){
        bienvenida = (
            <div>
                <h1>Haz sido Registrado con exito!</h1>  
                <Link to="/login">iniciar Sesión</Link>

            </div>
        );
    }else {
        bienvenida = (
            <div>
                <h1>Registro falló!</h1>
                <Link to="/Signup">intentar de nuevo</Link>

            </div>
        );
    }

    return (
        <div className="homepage">
            {bienvenida}
        </div>
    )
}

export default Registro;