//Configuramos firebase
const serviceAccount = require('./proyecto-sanatorio-juan-xxiii-firebase-adminsdk-ey6xc-70c4f15217.json')
const admin = require('firebase-admin')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://proyecto-sanatorio-juan-xxiii-default-rtdb.firebaseio.com/'
})

const db = admin.database()

module.exports = db