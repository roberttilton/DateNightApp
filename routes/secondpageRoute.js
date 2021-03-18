const router = require('express').Router();
const path = require('path');

router.get('/secondpage', (req, res) => {
    console.log('GET /secondpage');
    res.sendFile(path.join(__dirname, '../public/secondpage.html'));
});

router.get('/generatedcard', (req, res) => {
    console.log('GET /generatedcard');
    res.sendFile(path.join(__dirname, '../public/generatedcard.html'));
});

module.exports = router;