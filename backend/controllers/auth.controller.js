const authService = require('../services/auth.service');



const authController = {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.status(200).json(result)
        } catch (e) {
            next(e)
        }
    },
    async register(req, res, next) {
        try {
            const { username, email, password } = req.body;
            const result = await authService.register({ username, password, email })
            res.status(201).json(result);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = authController