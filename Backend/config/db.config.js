/* 
    FICHERO CON LOS DATOS DE CONFIGURACIÓN DE LA CONEXIÓN  SEQUELIZE EN NUESTRA APP 
*/

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "db_motorbikes",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};