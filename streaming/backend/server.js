const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


//inicar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)          //Cuando concatenamos string con variables, se necesita la comilla japonesa `````

})

app.use(bodyParser.json());     //usamos esto para analizar el cuerpo y pasarlo a JSON 
app.use(cors());    //permite solicitudes de recursos


//CONEXIÓN A MONGO ATLAS
mongoose.connect('mongodb+srv://jovannaescogar9:141592@streaming.ahi3lnk.mongodb.net/?retryWrites=true&w=majority&appName=Streaming', {
    dbName: 'Streaming',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Conectado a Mongo Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});


//TODAS LAS COLECCIONES
//recalcar quye la estructura debe de estar igual - USUARIOS
const userSchema = new mongoose.Schema({
    nombre_usuario: String,
    correo: String,
    contrasena: String,
    peliculas_vistas: Array,
    foto: String,
    listas: Array

})

const Usuario = mongoose.model('Usuario', userSchema);
module.exports = Usuario;


//recalcar quye la estructura debe de estar igual - SERIES
const serieSchema = new mongoose.Schema({
    titulo: String,
    genero: Array,
    anio: Number,
    rottenTomatoes: Number,
    fecha_estreno: Number,
    reparto: Array,
    sinopsis: String,
    disponible_en_netflix: Boolean,
    portada: String,
    temporadas: Object

})

const Serie = mongoose.model('Serie', serieSchema);
module.exports = Serie;


//recalcar quye la estructura debe de estar igual - PELICULAS
const peliculaSchema = new mongoose.Schema({
    titulo: String,
    genero: Array,
    anio: Number,
    calificacionRT: Number,
    comentarios: Array,
    estrellas_usuarios: Array,
    portada: String

})

const Pelicula = mongoose.model('Pelicula', peliculaSchema);
module.exports = Pelicula;



//APIS
//Ruta para obtener todos los USUARIOS
app.get('/api/usuarios/', async (req, res) => {
    try{
        const usuarios = await Usuario.find({});
        res.json(usuarios)
    }
    catch(error){
        console.log(error);
    }
})



//Ruta para obtener todas las SERIES
app.get('/api/series/', async (req, res) => {
    try{
        const series = await Serie.find({});
        res.json(series)
    }
    catch(error){
        console.log(error);
    }
})



//Ruta para obtener todas las PELICULAS
app.get('/api/peliculas/', async (req, res) => {
    try{
        const peliculas = await Pelicula.find({});
        res.json(peliculas)
    }
    catch(error){
        console.log(error);
    }
})

//Ruta obtener una pelicula por id
app.get("/api/pelicula/:id", async (req, res) => {
    let idPelicula = req.params.id;
    try{
        const pelicula = await Pelicula.findById({_id: idPelicula});
        res.json(pelicula)
    }
    catch(error){
        console.log(error);
    }
})

//Ruta insertar un comentario
app.get("/api/pelicula/:id/comentario", async (req, res) => {
    let idPelicula = req.params.id;
    let comentario = req.params.comentario;
    try{
        const pelicula = await Pelicula.update({ _id: ObjectId(idPelicula)},
        { $push: {comentarios: comentario}
        });
        res.json(pelicula)
    }
    catch(error){
        console.log(error);
    }
})
