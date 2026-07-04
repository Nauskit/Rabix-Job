const authService = require('../services/auth.service');



const authController = {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.status(200)
        } catch (e) {
            next(e)
        }
    },
    async register(req, res, next) {
        try {
            const { email, password, username } = req.body;
            const result = await authService.register({ email, password, username })
            res.status(201);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = authController