const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname:'hbs'
}))
app.set('view engine', '.hbs')

//midle wares
app.use(morgan('dev'))
app.use(express.urlencoded( { extended: true } ))

//routes
app.use(require('./routes/index'))

//statics files
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app