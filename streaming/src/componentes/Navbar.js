import React from "react";
import {Link, Outlet} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                <li>
                        <Link to="/">Inicio</Link>                        
                    </li>
                    <li>
                        <Link to="/Peliculas">Peliculas</Link>
                    </li>
                    <li>
                        <Link to="/Series">Series</Link>
                    </li>
                    <li>
                        <Link to="/">Inicio de sesión</Link>
                    </li>
                    <li>
                        <Link to="/">Ingresar</Link>
                    </li> 
                </ul>
            </nav>
            <Outlet/>
        </div>
        
    );
}

export default Navbar;