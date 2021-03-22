const path = require('path');
const fs = require('fs')
const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/events')
    .post(async (req, res) => {
        const yelpContent = req.body.yelpContent;
        const userLocation = req.body.userLocation;
        const typeInput = req.body.typeInput;
        const URL = `https://api.yelp.com/v3/businesses/search?term=${typeInput}&location=${userLocation}`;
        const response = await fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${process.env.YELP_API_TOKEN}`,
                'Content-Type': `application/json`
            }
        });

        res.send(await response.json());
    })

module.exports = router;