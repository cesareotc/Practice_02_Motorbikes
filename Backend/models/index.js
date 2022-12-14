/* 
    FICHERO CON LA CONFIGURACIÓN DE CONEXIÓN SEQUELIZE - BBDD 
*/

const dbConfig = require("../config/db.config.js");  // Cargamos los parámetros de la conexión

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};  // Creamos un Objeto db, para asociarle valores necesarios para la conexión a sus atributos

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.motorbikes = require("./motorbike.model.js")(sequelize, Sequelize);  // ESTA LÍNEA GENERA LA TABLA EN LA BBDD
                                                                        // A PARTIR DE LOS OBJETOS motorbike TOMADOS
                                                                        // DEL MODELO (fichero ./motorbike.model.js)

module.exports = db;
