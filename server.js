const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');

const routes = require('./routes');
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3310;

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});