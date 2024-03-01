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
    dbName: 'ejProyu2',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Conectado a Mongo Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});


//TODAS LAS COLECCIONES
//recalcar quye la estructura debe de estar igual
const userSchema = new mongoose.Schema({
    nombre_usuario: String,
    correo: String,
    contrasena: String,
    peliculas_vistas: Array,
    foto: String,
    listas: Array

})

const User = mongoose.model('User', userSchema);
module.exports = User;








//APIS
//Ruta para obtener todos los usuarios
app.get('/api/usuarios/', async (req, res) => {
    try{
        const usuarios = await User.find({});
        res.json(usuarios)
    }
    catch(error){
        console.log(error);
    }
})



