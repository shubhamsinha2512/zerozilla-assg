const Router = require('express').Router;
const AuthController = require('../controllers/AuthController')
const AgencyController = require('../controllers/AgencyController')

const AgencyRouter = Router();


//special routes
AgencyRouter.route('/get-top-clients')
.get(AuthController.protected, AgencyController.getTopClients)

AgencyRouter.route('/create-agency-and-client')
.post(AuthController.protected, AgencyController.createAgencyAndClient)


AgencyRouter.route('/')
.get(AuthController.protected, AgencyController.getAllAgency)
.post(AuthController.protected, AgencyController.createAgency)
.patch()

AgencyRouter.route('/:agencyId')
.get(AuthController.protected)
.patch(AuthController.protected)

module.exports = AgencyRouter