// const router = require('express').Router();
// const path = require('path');
// const apiRoutes = require('./api');
// const secondpageRoute = require('./secondpageRoute.js');

// // URL: /api
// router.use('/api', apiRoutes);
// router.use('/secondpage', secondpageRoute);

// router.get('/', (req, res) => {
//     console.log('GET /');
//     res.sendFile(path.join(__dirname, '../home.html'));
// });

// router.get('*', (req, res) => {
//     console.log('GET 404 error');
//     res.sendFile(path.join(__dirname, '../404.html'));
// });

// module.exports = router;

const express = require("express");
const path = require('path');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    //handle root
    res.sendFile(path.join(__dirname, '../public/home.html'))
});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});