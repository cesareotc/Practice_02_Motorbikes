/* 
    FICHERO CON NUESTRO MODELO DE DATOS SEQUELIZE
    Recordemos de que al margen de los campos/atributos aquí indicados (brand, model, engine),
    sequelize creará otros (id, createdAt, updatedAt) en el momento de generar las tablas
*/

module.exports = (sequelize, Sequelize) => {
    const Motorbike = sequelize.define("motorbike", {
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        engine: {
            type: Sequelize.STRING
        }
    });

    return Motorbike;
 };