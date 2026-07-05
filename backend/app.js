const cors = require('cors')
const express = require('express');
const authRouter = require('./routers/auth.router')
const errorHandler = require('./middlewares/errorHandler.middleware')
const app = express();


app.use(express.json());
app.use(cors())

app.use('/auth', authRouter)


app.use(errorHandler);

module.exports = app;