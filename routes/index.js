const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const secondpageRoute = require('./secondpageRoute.js');

// URL: /api
router.use('/api', apiRoutes);
router.use('/secondpage', secondpageRoute);

router.get('/', (req, res) => {
    console.log('GET /');
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('*', (req, res) => {
    console.log('GET 404 error');
    res.sendFile(path.join(__dirname, '../public/404.html'));
});

module.exports = router;