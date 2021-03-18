const router = require('express').Router();
const path = require('path');

router.get('/secondpage', (req, res) => {
    response.sendFile(path.join(__dirname, '../public/secondpage.html'));
});

module.exports = router;