const router = require('express').Router();
const path = require('path');
const userRoutes = require('./user-routes.js');

// URL: /api/user
console.log('about to invoke user routes');
router.use('/user', userRoutes);

module.exports = router;