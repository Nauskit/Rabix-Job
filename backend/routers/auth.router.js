const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateLogin } = require('../middlewares/validate.middleware');

router.post("./login", validateLogin, authController.login);



module.exports = router;