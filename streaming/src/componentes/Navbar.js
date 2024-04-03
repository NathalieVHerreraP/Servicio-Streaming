import React from "react";
import {Link, Outlet} from "react-router-dom";
import { useEffect } from "react";

import '../css/nav.css' 

function Navbar(){

    const [notif, setNotif] = React.useState(null)
    let notifList = (<></>);
    let notifFull = (<></>);

    useEffect( () => {
        fetch(`/api/notificaciones/`)
            .then((res) => res.json())
            .then((notif) => setNotif(notif))
            .catch(error => {
                console.error(error);
            });
    }, []);
    
    console.log(notif)
    console.log("usuario logeado: "+ sessionStorage.getItem("usuario"))


    {if(sessionStorage.getItem("usuario")){
        console.log(sessionStorage.getItem("usuario"))
        notifList = notif.map((notificacion) =>{
            return(
                    <li className="notificación">El usuario {notificacion.usuario} ha comentado en la pelicula {notificacion.pelicula}.</li>
            )
        });

        notifFull = (
            <li>
                <img className="icono" src={require(`../imagenes/iconoNotif.png`)}/>
                <ul className="notificacioness">
                    {notifList}
                </ul>
            </li>
        );
    }}
    
    return(
        <div>
            {/* <img src={logo} alt="logo rana"></img> */}
            <nav className="navegador" id="navbar">
                <ul>
                    
                    <li>
                        <Link className="link" to="/">Inicio</Link>                        
                    </li>
                    <li>
                        <Link className="link" to="/Peliculas">Peliculas</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Series">Series</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Login">Inicio de sesión</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Signup">Registrarse</Link>
                    </li> 
                    {notifFull}
                </ul>
                
                

            </nav>
            <Outlet/>
        </div>
        
    );
}

export default Navbar;