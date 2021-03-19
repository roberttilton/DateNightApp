const router = require('express').Router();
const path = require('path');

router.get('/dashboard', (req, res) => {
    console.log('GET /dashboard');
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

router.get('/generatedcard', (req, res) => {
    console.log('GET /generatedcard');
    res.sendFile(path.join(__dirname, '../public/generatedcard.html'));
});

module.exports = router;