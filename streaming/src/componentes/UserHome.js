import React from "react"
import {Link, useParams, } from "react-router-dom";

function UserHome (){
    let params = useParams();
    const [response,setResponse]= React.useState(null);
    let bienvenida = (<></>);

    console.log(params);

    React.useEffect(() => {
        fetch(`/api/login/${params.email}/${params.password}`)
        .then((res) => res.json())
        .then((response) => setResponse(response))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(response);

    sessionStorage.setItem("usuario", response.nombre_usuario);
    

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