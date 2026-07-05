const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLogin } = require('../middlewares/validate.middleware');

router.post("/login", validateLogin, authController.login);
router.post("/register", validateLogin, authController.register);


module.exports = router;