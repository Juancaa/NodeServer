'use strict'

const express = require('express')

const app = express()

const middleware = require('./middleware')

middleware.useMiddleware(app,express)


//app.get('/', (req, res) => res.send('LANDING PAGE')

//app.get('/about', (req, res) => res.send('Developed with NodeJS'))

require('./router')(app)

app.listen(3000)
