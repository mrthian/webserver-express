const http = require('http');


// crear el servidor
/***  MANERA TRADICIONAL DE CREAR EL SERVICIO REST */
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        //res.write('Hola mundo');

        let persona = {
            nombre: 'Cristian Giraldo',
            fechaNacimiento: '1991-07-03',
            genero: 'Masculino',
            url: req.url
        }
        res.write(JSON.stringify(persona));

        // Indicar que termine de escuchar
        res.end();
    })
    .listen(8080);


console.log('Escuchando el puerto 8080');