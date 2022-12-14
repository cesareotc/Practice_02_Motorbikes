/* 
    FICHERO CON LAS RUTAS QUE UTILIZARÁ NUESTRA APP EN EL SERVIDOR 
*/

module.exports = app => {

    // Necesitamos conocer los métodos que utilizará nuestra App para trabajar sobre la BBDD
    const motorbikes = require("../controllers/motorbike.controller.js");

    // Además instanciamos la variable que manejará las rutas
    var router = require("express").Router();

    // Y ahora definiremos las rutas de nuestra App 
    // (métodos REST vinculados con las funciones Sequelize para el manejo de la BBDD)

    // Create a new Motorbike; (Comenzaremos con la de creación de una motocicleta)
    router.post("/", motorbikes.create);

    // Retrieve all Motorbikes;  (Leemos los datos de todas las motocicletas de nuestra BBDD)
    router.get("/", motorbikes.findAll);

    // Retrieve a single Motorbike with id; (Leemos los datos de una sóla moto identificada por su id)
       router.get("/:id", motorbikes.findOne);  // >>>> TUVIMOS QUE ANULARLO PORQUE EL MÉTODO DE SEQUELIZE NO ESTABA IMPLEMENTADO <<<<<<

    // Update a Motorbike with id;  (Modificamos los datos de una moto identificada por su id)
    router.put("/:id", motorbikes.update);

    // Delete a Motorbike with id; (Borramos una moto en concreto, identificada por su id)
    router.delete("/:id", motorbikes.delete);

    app.use('/api/motorbikes', router);  // Establecemos como cabecera de nuestra rutas '/api/motorbikes'
};