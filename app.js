// Importa el módulo express
const express = require('express');

// Crea una aplicación de Express
const app = express();

// Define una ruta que responda con tu nombre
app.get('/', (req, res) => {
    res.send('¡Hola! Mi nombre es Rafael Albino Jovel Alfaro');
});

// Especifica el puerto en el que escuchará el servidor
const puerto = 3000;

// Hace que el servidor escuche las solicitudes en el puerto especificado
app.listen(puerto, () => {
    console.log(`arriba`);
});
