const Router = require('express').Router;
const AuthController = require('../controllers/AuthController')
const ClientController = require('../controllers/ClientController');
const Client = require('../models/ClientModal');

const ClientRouter = Router();

ClientRouter.route('/')
.get(AuthController.protected, ClientController.getAllClient)
.post(AuthController.protected, ClientController.createClient)


ClientRouter.route('/:clientId')
.get(AuthController.protected, ClientController.getOneClient)
.patch(AuthController.protected, ClientController.updateOneClient)

module.exports = ClientRouter