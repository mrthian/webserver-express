const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

// CAPTURAR LAS VARIABLES DE ENTERNOS DE HEROKU | Esto porque se desconoce en el servidor
const port = process.env.PORT || 3000;

// middleware
app.use(express.static(__dirname + '/public'));

// REGISTRAR LOS PARTIAL DE hbs
hbs.registerPartials(__dirname + '/views/parciales'); //, function(err) {});

// renderizar page | TEMPLATE ENGINE
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //res.send('Hello World');

    // RENDERIZAR EL FICHERO CON EL COMPLEMENTO EXPRESS
    //res.render('home')

    // FORMA DE ENVIAR VARIABLES A UNA PAGINA
    res.render('home', {
        title: 'Home',
        nombre: 'Cristian'
    })
});

app.get('/about', function(req, res) {
    //res.send('Hello World');

    // RENDERIZAR EL FICHERO CON EL COMPLEMENTO EXPRESS
    //res.render('home')

    // FORMA DE ENVIAR VARIABLES A UNA PAGINA
    res.render('about', {
        title: 'about'
    })
});

app.get('/persona', function(req, res) {
    let persona = {
        nombre: 'Cristian Giraldo',
        fechaNacimiento: '1991-07-03',
        genero: 'Masculino',
        url: req.url
    };
    res.send(persona);
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));