import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../css/style.css'; // Importa el archivo CSS


function Signup() {

    const history=useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    // async function Submit(e){
    //     e.preventDefault();

    //     if(response=="exist"){
    //         history("/UserHome",{state:{id:email}})
    //     }
    //         else if(response=="notexist"){
    //         alert("El usuario no se ha registrado o los datos son erroneos")
    //     }
    // }



    return (
        <div className="login">

            <h1>Registrarse</h1>

            <form>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <Link to={"/registro/"+email+"/"+password}>Registrarme</Link>
            </form>

            <br />
            <p>O</p>
            <br />

            <Link to="/login">Iniciar Sesión</Link>

        </div>
    )
}

export default Signup