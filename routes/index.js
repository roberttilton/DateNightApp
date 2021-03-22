const router = require('express').Router();
const path = require('path');
const userRoutes = require('./api/user');
const yelpRoutes = require('./api/yelp');

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
router.use('/api/user', userRoutes);
router.use('/api/yelp', yelpRoutes);

module.exports = router;