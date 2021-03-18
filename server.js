const express = require('express');

const routes = require('./routes');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3310;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});