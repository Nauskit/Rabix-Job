const appError = require('../utils/appError')

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const normalizationEmail = email.trim().toLowerCase();

    if (!normalizationEmail || !password) {
        throw new appError(400, "Email and password are required")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizationEmail)) {
        throw new appError(400, "Invalid email format")
    }
    next();
}

exports.validateRegister = (req, res, next) => {
    const { email, username, password } = req.body;

    const normalizationEmail = email.trim().toLowerCase();
    const normalizationName = username.trim();

    if (!normalizationEmail || !normalizationName || !password) {
        throw new appError(400, "All field are required")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizationEmail)) {
        throw new appError(400, "Invalid email format")
    }
    if (password.length < 8) {
        throw new appError(400, "Password must be at least 8 characters")
    }

    next();
}