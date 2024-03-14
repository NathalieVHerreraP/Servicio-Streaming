import React from  "react";
import '../css/series.css';
// import rana from '../imagenes/rana.jpeg'

function Series (){
    
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
            
            <h1>Series de La Rana Mafiosa</h1>

            <div className="card">
                <ul>
                    {series?.map((series) => (
                        <>
                        <div className="serie">

                        <div className="portadaSerie">
                           <img src={series.portada} alt="portada"  />
                         
                        </div>
                        
                        <div className="contenido">
                            <h2 key={series._id}>{series.titulo}, {series.anio} </h2>
                            <p>{series.sinopsis}</p> <strong>GENEROS:</strong> {series.genero} 
                            <p>Fecha de estreno: {series.fecha_estreno}</p>
                            <p>REPARTO</p>
                            <ul><li>{series.reparto}</li></ul>
                            <p>CALIFICACIÓN EN RT: {series.rottenTomatoes}</p>
                            <h5>Temporadas:</h5>
                            {/* <p>{series.temporadas}</p> */}
                            
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




export default Series;