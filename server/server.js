const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/middlewares');
const PORT = process.env.PORT || 5000;

const apartments = require('./routers/apartments');
const app = express();
app.use(bodyParser.json())

app.use('/apartments', apartments);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use(middlewares.invalidBody);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
