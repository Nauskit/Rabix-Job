const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLogin, validateRegister } = require('../middlewares/validate.middleware');

router.post("/login", validateLogin, authController.login);
router.post("/register", validateRegister, authController.register);


module.exports = router;