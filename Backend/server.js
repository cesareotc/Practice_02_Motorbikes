/* 
    FICHERO DE ARRANQUE Y DE GESTIÓN PRINCIPAL DE NUESTRA APP EN EL SERVIDOR 
*/

const express = require("express");     // Importamos/requerimos el uso de la librería express en este fichero server.js


const cors = require("cors");

const app = express();                  // Usamos la constante app para cargar express


var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));


// Habilitamos la librería express para poder manejar (req, res) contenidos json y x-www-form-urlencoded

// parse request of content-type - application/json
app.use(express.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Añadimos líneas para el borrado de tablas en la BBDD cada vez que arranquemos la App

const db = require("./models");  // Declaramos una constante db que dispondrá de todos los parámetros y demás
                                 // datos de la conexión de Sequelize con nuestra BBDD a través del require

// normal use. Doesn´t delete the database data
// db.sequelize.sync();

/*
    (COSAS DESDE BEZKODER):

    db.sequelize.sync()
        .then(() => {
            console.log("Synced deb.");
        })
        .catch((err) => {
            console.log("Failed to sync db: " + err.message);
        });
*/

// Establecemos que nuestro objeto sequelize (gestor de la conexión Sequelize-BBDD desde este fichero server.js)
// establezca una sicronización forzada; esto es, que borre todas las tablas existentes y las cree de nuevo cada
// vez que establezcamos una sesión con nuestra App

// In development, you may need to drop existing tables and re-sync database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
});

// Establecemos el End-Point de escucha (Punto de entrada principal)
// de nuestra App en la raíz ("/") y Puerto 8080

// simple route             
app.get("/", (req, res) => {            
    res.json({ message: "Welcome to Motorbikes Application." });
});

// Importamos las rutas (desde el fichero indicado) para las distintas acciones a realizar sobre la BBDD
// >>>>> OJO! QUE NO SE AÑADIÓ LA EXTENSIÓN DEL FICHERO <<<<<<<<<<<
require("./routes/motorbike.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;      // PORT recogerá el valor establecido (también para PORT) en la Variable
                                            // de Entorno de Usuario o, en su defecto, en el Puerto 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);  // Y si nuestra App está efectivamente escuchando por el Puerto
                                                        // indicado, mostraremos por consola el mensaje de confirmación
});