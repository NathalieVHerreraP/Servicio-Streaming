import React from  "react";
import '../css/home.css';

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

            <div className="Portadas">
                <ul>
                    {series?.map((series) => (
                        <>
                        <div className="serie">

                        <div className="portadaSerie">
                           <img src={series.portada} alt="portada"  />
                         
                        </div>
                        

                        </div>
                        
                        
                         <br></br>
                         </>
                    ))}
                    
                    
                </ul>
            </div>
        </div>
    );
}




export default Home;