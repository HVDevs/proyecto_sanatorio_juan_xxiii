const { Router } = require('express')
const router = Router()
const db = require('../config/firebase-database')

router.get('/', (req, res) => {
    //Antes de renderizar, hacemos la consulta
    db.ref('contacts').once('value', (snapshot) => {
        const data = snapshot.val()
        res.render('index', { contacts: data }) //Pasamos los datos
    })
})

//Agregamos los datos
router.post('/new-contact', (req, res) => {
    console.log(req.body);
    //Creamos el objeto
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newContact)
    res.redirect('/')
})

//Eliminamos los datos
router.get('/delete-contact/:id', (req, res) => {
    db.ref('contacts/' + req.params.id).remove()
    res.redirect('/')
})

module.exports = router