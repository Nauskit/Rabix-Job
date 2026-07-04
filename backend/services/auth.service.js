const userModel = require('../models/user.model')
const appError = require('../utils/appError')
const bcrypt = require('bcrypt')


const authService = {
    async login(email, password) {
        const user = await userModel.findByEmail(email);
        if (!user) {
            throw { status: 401, message: "Invalid email or password" }
        }

        const isMatch = await bcrypt.compare(password, user.password_hash)
        if (!isMatch) {
            throw new appError(401, "Invalid email or password")
        }
        return ({
            message: 'Login successfully',
            user: { id: user.id, email: user.email, username: user.username }
        })
    },
    async register({ email, username, password }) {
        const existUser = await userModel.findByEmail(email)
        if (existUser) {
            throw new appError(409, "Email already registered")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.register(email, hashPassword, username,)
        return ({
            message: 'Register successfully',
            user: { user: newUser }
        })
    }
}


module.exports = authService