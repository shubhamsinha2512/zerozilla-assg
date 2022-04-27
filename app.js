const express = require('express');
const morgan = require('morgan');
const AgencyRouter = require('./routes/AgencyRouter');
const AuthRouter = require('./routes/AuthRouter');
const ClientRouter = require('./routes/ClientRouter');

const app = express();
require('dotenv').config({path: './config.env'})

app.use(morgan('dev'))

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next)=>{
    req.requestTime = new Date().toISOString();

    next()
})

app.use('/auth', AuthRouter)
app.use('/auth', AgencyRouter)
app.use('/auth', ClientRouter)

//for unhandled request
app.use('*', (req, res, next)=>{
    const error = new Error(`Reuested URL ${req.originalUrl} cannot be found!`)
    error.statusCode = 404;
    error.status = 'fail';

    next(error)
})

module.exports = app;