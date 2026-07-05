

exports.validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    const normalizationEmail = email.trim().toLowerCase();

    if (!normalizationEmail || !password) {
        return res.status(400).json({
            error: "Email and password are required"
        })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizationEmail)) {
        return res.status(400).json({
            error: "Invalid email format"
        })
    }
    next();
}

exports.validateRegister = (req, res, next) => {
    const { email, username, password } = req.body;

    const normalizationEmail = email.trim().toLowerCase();
    const normalizationName = username.trim();

    if (!normalizationEmail || !normalizationName || !password) {
        return res.status(400).json({
            error: "All field are required"
        })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizationEmail)) {
        return res.status(400).json({
            error: "Invalid email format"
        })
    }
    if (password.length < 8) {
        return res.status(400).json({
            error: "Password must be at least 8 characters"
        })
    }

    next();
}