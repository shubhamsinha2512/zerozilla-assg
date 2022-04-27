const Router = require('express').Router;

const ClientRouter = Router();

ClientRouter.route('/')
.get()
.post()
.patch()

module.exports = ClientRouter