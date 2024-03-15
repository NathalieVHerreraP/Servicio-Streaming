import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import {Link, useParams, } from "react-router-dom";

function UserHome (){
    let params = useParams();
    const location=useLocation();
    const [response,setResponse]= React.useState('');
    let bienvenida = (<></>);

    console.log(params);

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/login/${params.email}`)
        .then((res) => res.json())
        .then((response) => setResponse(response))
        .catch(error => {
            console.error(error);
          });
    }, []);

    if(response){
        bienvenida = (
            <div>
                <h1>bienvenido {response.nombre_usuario}</h1>  
            </div>
        );
    }else {
        bienvenida = (
            <div>
                <h1>No existe el usuario o los datos son erroneos</h1>
                <Link to="/Login">intentar de nuevo</Link>

            </div>
        );
    }

    return (
        <div className="homepage">
            {bienvenida}
        </div>
    )
}

export default UserHome;