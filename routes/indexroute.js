const router = require('express').Router();
const path = require('path');

router.get('/index', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/secondpage', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/secondpage.html'));
});

router.get('/generatedcard', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/generatedcard.html'));
});

router.get('*', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
});
module.exports = router;