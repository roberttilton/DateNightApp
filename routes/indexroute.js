const router = require('express').Router();
const secondpageRoutes = require('./secondpageRoute');

router.use('/', secondpageRoutes);

module.exports = router;