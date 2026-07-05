const jwt = require('jsonwebtoken')
const appError = require('../utils/appError')
require('dotenv').config();

const verifyToken = (req, res, next) => {

    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new appError(401, "Access token is required")
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        throw new appError(401, "Access token is required")
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET)
        req.user = decoded
        next();
    } catch (e) {
        next(new appError(401, "Invalid or expired token"))
    }
}