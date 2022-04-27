const Router = require('express').Router;

const AuthRouter = Router();

AuthRouter.route('/login')
.post()


AuthRouter.route('/signup')
.post()

module.exports = AuthRouter