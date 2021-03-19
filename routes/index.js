const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api/user');

console.log("route testing");
router.route("/")
  .get((req, res) => {
    console.log("GET /");
    //handle root
    res.sendFile(path.join(__dirname, '../public/homepage.html'))
  });

router.route("/dashboard")
  .get((req, res) => {
    console.log("GET /dashboard");
    //handle root
    res.sendFile(path.join(__dirname, '../public/dashboard.html'))
  });

console.log('about to invoke /api');
router.use('/api', apiRoutes);

module.exports = router;