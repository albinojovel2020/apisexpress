const express = require('express');
const app = express();

// Definir una ruta que devuelva el mismo resultado que el arreglo proporcionado
app.get('/photos', (req, res) => {
    const marsPhotos = [
        {
            "id": "424905",
            "img_src": "https://www.nintenderos.com/wp-content/uploads/2021/05/best-electric-type-pokemon-ampharos-pikachu-zapdos-more-Cropped.jpg"
        },
        {
            "id": "424906",
            "img_src": "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg"
        },
        {
            "id": "424907",
            "img_src": "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg"
        },
        {
            "id": "424908",
            "img_src": "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg"
        },
        {
            "id": "424909",
            "img_src": "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg"
        },
        {
            "id": "424910",
            "img_src": "https://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631280305225E03_DXXX.jpg"
        }
    ];

    res.json(marsPhotos);
});

const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
    console.log(`ARRIBA`);
});
