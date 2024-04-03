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

/* app.use(express.json); */
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
    fecha_estreno: Date,
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
    comentarios: [{
        usuario: String,
        contenido:String ,
        fecha: Date,
        estrella: Number
    }],
    portada: String

})

const Pelicula = mongoose.model('Pelicula', peliculaSchema);
module.exports = Pelicula;

//usuarios
const usuariosSchema=new mongoose.Schema({
        nombre_usuario: String,
        correo: String,
        contrasena: String,
        peliculas_vistas: Array,
        foto: String,
        isLogged: Boolean
})

const Usuarios = mongoose.model("usuarios",usuariosSchema)

module.exports = Usuarios

const notifSchema = new mongoose.Schema({
    titulo: String,
    usuario: String,
    fecha: String
})

const NotifComents = mongoose.model("notificaciones", notifSchema)

module.exports = NotifComents


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

//Ruta para obtener las noficiaciones del dia
app.get('/api/notificaciones/', async (req,res) =>{
        const fecha = new Date();
        const dia = fecha.getDay();
        const mes = fecha.getMonth()+1;
        const año = fecha.getFullYear();
        const fechaCompleta = año+"-"+mes+"-"+dia; 

        try{
        const notifs = await NotifComents.find({
            "$expr": {
              "$and": [
                { $eq: [{ $year: "$fecha" }, { $year: new Date(fechaCompleta) }]},
                { $eq: [{ $month: "$fecha" }, { $month: new Date(fechaCompleta) }]},
                { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(fechaCompleta) }]}
              ]
            }
          })
        res.json(notifs);
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
app.get("/api/agregarComentario/:id/:usuario/:coment/:calif", async (req, res) => {
    let idPelicula = req.params.id;
    let coment = {
        usuario: req.params.usuario,
        contenido: req.params.coment,
        calif: req.params.calif
    };
    console.log("ID: "+ idPelicula +"Comentario: "+ coment.calif/2);
    try{
        let doc = await Pelicula.findByIdAndUpdate( idPelicula,
            { 
                $push: 
                {
                    "comentarios": 
                        {
                            usuario: coment.usuario,  
                            contenido: coment.contenido, 
                            fecha: new Date(),
                            estrella: coment.calif
                        }
                }
            }
        ) 

        console.log(doc); 
        res.json({respuesta: true});
    }catch(error){
        console.log(error);
    };
});

//Ruta eliminar un comentario
app.get("/api/eliminarComentario/:id/:usuarioID", async (req, res) => {
    let idPelicula = req.params.id;
    let usuarioID = req.params.usuarioID;
    console.log("ID: "+ idPelicula +"Comentario: "+ usuarioID);
    try{
        let doc = await Pelicula.findByIdAndUpdate( idPelicula,
            { $pull: {comentarios: {
                _id: usuarioID
            }}}
        )  
        console.log(doc);
        res.json({respuesta:"se eliminó el comentario"});
    }catch(error){
        console.log(error);
    };
});


//-----------------------post 
//Ruta para crear USUARIO
app.post('/api/usuario', (req, res) => {
    try{
        const usuario = Usuario(req.body);
        usuario.save().then((data) => res.json(data))

    }
    catch(error){
        console.log(error);
    }
    });


//Ruta para crear PELICULA
app.post('/api/pelicula', (req, res) => {
    try{
        const usuario = Pelicula(req.body);
        usuario.save().then((data) => res.json(data))
    }
    catch(error){
        console.log(error);
    }
});

//Ruta para crear SERIE
app.post('/api/serie', (req, res) => {
    try{
        const serie = Serie(req.body);
        serie.save().then((data) => res.json(data))
    }
    catch(error){
        console.log(error);
    }
});

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

//obtener usuario
app.get("/api/login/:email/:contrasena",async(req,res)=>{
    const email = req.params.email;
    const contra = req.params.contrasena;

    try{
        const usuario = await Usuarios.findOneAndUpdate({correo: email, contrasena: contra},{isLogged: true})
        res.json(usuario);

    }
    catch(e){
        console.log(e);
    }

})

app.post("/api/signup/:email/:password",async(req,res)=>{
    try{
        const usuario = Usuario({
            peliculas_vistas: [""],
            listas: [""],
            nombre_usuario: "Usuario",
            correo: req.params.email,
            contrasena: req.params.password,
            foto: ""});
        usuario.save().then(res.json({respuesta: true}))

    }
    catch(e){
        console.log(e);
    }

})




//NO FUNCIONA
//Ruta para Eliminar SERIE
app.delete('/api/serie/:id', async (req, res) => {
    const id =  req.params.id;
    try{
    const serieelim = await Serie.deleteOne({_id: id});
    res.json(serieelim);

    }
    catch(error){
        console.log(error);
    }
});