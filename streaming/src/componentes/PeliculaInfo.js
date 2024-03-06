import React from "react";

function PeliculaInfo(props){

    const [pelicula,setPelicula] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/pelicula/:${props.id}`)
        .then((res) => res.json())
        .then((pelicula) => setPelicula(pelicula))
        .catch(error => {
            console.error(error);
          });
    }, []);

    console.log(pelicula);

    return (
        <div>

        </div>
    );
}

export default PeliculaInfo;