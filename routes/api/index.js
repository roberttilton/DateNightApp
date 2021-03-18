const router = require('express').Router();
const path = require('path');
const userRoutes = require('./user-routes.js');

// URL: /api/user
router.use('/user', userRoutes);

module.exports = router;