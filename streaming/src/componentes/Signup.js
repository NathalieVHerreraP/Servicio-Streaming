import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../css/style.css'; // Importa el archivo CSS


function Signup() {

    const navigate = useNavigate();

    const [usuario,setUsuario] = useState(null);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    



    return (
        <div className="login">

            <h1>Registrarse</h1>

            <form>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <button
                    onClick={
                        ()=>{
                            if(email != "" && password != ""){
                                navigate(`/Registro/${email}/${password}`)
                            }
                                else{
                                alert("debe de ingresar un corrreo y una contraseña")
                            }
                        }
                    }
                >
                    Registrarme
                </button>
                {/* <Link to={"/registro/"+email+"/"+password}>Registrarme</Link> */}
            </form>

            <br />
            <p>O</p>
            <br />

            <Link to="/login">Iniciar Sesión</Link>

        </div>
    )
}

export default Signup