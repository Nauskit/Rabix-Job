const userModel = require('../models/user.model')
const appError = require('../utils/appError')
const bcrypt = require('bcrypt')
const { genarateAccessToken, genarateRefreshToken } = require('../utils/jwt')


const authService = {
    async login(email, password) {
        const user = await userModel.findByEmail(email);
        if (!user) {
            throw new appError(401, "Invalid email or password")
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new appError(401, "Invalid email or password")
        }

        const accessToken = genarateAccessToken(user);
        const refreshToken = genarateRefreshToken(user);


        return ({
            message: 'Login successfully',
            user: { id: user.id, email: user.email, username: user.username },
            accessToken,
            refreshToken
        })
    },
    async register({ username, email, password }) {
        const existUser = await userModel.findByEmail(email)
        if (existUser) {
            throw new appError(409, "Email already registered")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser(username, email, hashPassword)
        return ({
            message: 'Register successfully',
            user: { user: newUser }
        })
    }
}


module.exports = authService