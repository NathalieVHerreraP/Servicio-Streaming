import React from  "react";
import '../css/home.css';
import Peliculas from "./Peliculas";
import Series from "./Series";


function Home (){
    
    const [series, setSeries] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/series/")
        .then((res) => res.json())
        .then((series) => setSeries(series))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(series);

    

    return(
        <div className="seriesInfo">
            
            <h1> BIENVENIDOS </h1>
            <h2> Aquí encontrars series y peliculas de tu agrado </h2>
            <p> Entra en nuetro menú y diviertete mucho </p>

            <Series/>
            <Peliculas/>

            </div>
    );
}

export default Home;