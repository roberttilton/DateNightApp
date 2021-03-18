// const router = require('express').Router();
// const path = require('path');
// const apiRoutes = require('./api');
// const secondpageRoute = require('./secondpageRoute.js');

// // URL: /api
// router.use('/api', apiRoutes);
// router.use('/secondpage', secondpageRoute);

// router.get('/', (req, res) => {
//     console.log('GET /');
//     res.sendFile(path.join(__dirname, '../home.html'));
// });

// router.get('*', (req, res) => {
//     console.log('GET 404 error');
//     res.sendFile(path.join(__dirname, '../404.html'));
// });

// module.exports = router;

const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

console.log("route testing");
router.get("/", (req, res) => {
  console.log("GET /");
    //handle root
    res.sendFile(path.join(__dirname, '../public/home.html'))
});

console.log('about to invoke /api');
router.use('/api', apiRoutes);

module.exports = router;