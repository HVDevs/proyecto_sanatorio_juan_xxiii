const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()

//settings
app.set('port', process.env.PORT || 3000)
//Establecemos es archivo de las vistas (lo que se renderiza en la web)
app.set('views', path.join(__dirname, 'views')) //__dirname es la ruta absoluta, sumada a la carpeta views
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname:'hbs' //Usamos la extension .hbs
}))
app.set('view engine', '.hbs')

//midle wares
app.use(morgan('dev'))
app.use(express.urlencoded( { extended: true } ))

//routes
app.use(require('./routes/index')) //El archivo de las rutas

//statics files
app.use(express.static(path.join(__dirname, 'public'))) // Los archivos estaticos (estilos, script e imagenes - entre otros)


module.exports = app