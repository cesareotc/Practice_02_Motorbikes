/* 
    FICHERO CON NUESTRO CONTROLLADOR DE ACCESO A LA BBDD
    Es decir, aquí estará los distintos métodos con los que podremos
    realizar el CRUD sobre nuestra Base de datos (BBDD). Estos método utilizarán funciones de Sequelize
*/

const db = require("../models");
const Motorbike = db.motorbikes;
const Op = db.Sequelize.Op;

// [1] Comenzamos con el método para guardar una nueva Moto en nuestra Base de Datos
// Create and Save a new Bike (Motorbike)
exports.create = (req, res) => {
    // Validate request; Lo primero es validar la entrada (datos a guardar en la BBDD)
    // y lo haremos a partir del campo brand (de su existencia) en nuestra entrada
    if(!req.body.brand){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;     // Tenemos que salir del método (Hay que volver a empezar)
    };

    // Si llegamos aquí es porque hemos validado la entrada (entrada no vacía)
    // Create a Bike;  Creamos el objeto para recoger los valores del request/entrada
    const motorbike = {
        brand: req.body.brand,
        model: req.body.model,
        engine: req.body.engine
    };

    // Guardaremos entonces el objeto en la BBDD (utilizando la función create de Sequelize)
    // Save a Bike in the database
    Motorbike.create(motorbike)  
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the bike."
            });
        });
};

// Leemos todas las motos disponibles en nuestra BBDD
// En este caso utilizaremos la función findAll de Sequelize
// Retrieve all Bikes from the database.
exports.findAll = (req, res) => {
    Motorbike.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving motorbikes."
            });
        });
};



// CONTINUAREMOS, actualizando/modificando los datos de una moto a partir de la referencia de su id
// En este caso utilizaremos la función update de Sequelize, y además deberemos instanciar un valor
// para id en nuestro método que permita identificar la moto que pretendemos modificar
// Update a Bike by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;   // Creamos el dato que recoja en el método el valor del id pasado

    Motorbike.update(req.body, {
        where: { id: id}
    })
        .then(num => {       // Trabajaremos con valores devueltos por la función update para saber
                             // si la modificación de la motocicleta en cuestión ha tenido éxito o no
            if(num == 1) {
                 res.send({
                    message: "Motorbike was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Motorbike with id=${id}. Maybe Motorbike was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Motorbike eiht id=" + id
            });
        });
    };  

// Por último borraremos un registro (una moto) de nuestra BBDD utilizando
// la función delete de Sequelize. Nuevamente referiremos la motocicleta 
// en cuestión utilizando su id. E igualmente, utilizaremos los valores devueltos
// por la función delete para saber si dicho borrado ha tenido éxito o no.
// Delete a Bike with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;
    
    Motorbike.destroy({
        where: {id: id}
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Motorbike was delted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Motorbike with id=${id}. Maybe Motorbike was not found.!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Motorbike with id=" + id
            });
        });

};


// Buscamos/mostramos una moto por su id
// Find a single Bike with an id:
exports.findOne = (req, res) => {

    const id = req.params.id;

    Motorbike.findByPk(id)
        .then(data => {
            if(data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Motorbike with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving Motorbike with id=`+id
            });
        });
};

