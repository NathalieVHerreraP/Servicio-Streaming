import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../css/style.css'; // Importa el archivo CSS


function Login() {

    const navigate=useNavigate();

    const [usuario,setUsuario] = useState(null);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
        <div className="login">

            <h1>Iniciar Sesión</h1>

            <form>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <button
                    onClick={
                        ()=>{

                            if(email != "" && password != ""){
                                navigate(`/Home/${email}/${password}`)
                            }
                            else{
                                alert("introduce informacion valida mamaguevo")
                            }
                        }
                    }
                >
                    Ingresar
                </button>
                {/* <Link to={"/Home/"+email}>Ingresar</Link> */}
            </form>

            <br />
            <p>O</p>
            <br />

            <Link to="/signup">Registrarse</Link>

        </div>
    )
}

export default Login