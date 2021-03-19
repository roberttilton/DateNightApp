const fetch = require('node-fetch');
const axios = require('axios');
var yelpContent = document.getElementById('datePosts');
// example code below
var userLocation = document.querySelector('.location-field');
var typeInput = document.querySelector('.activity-field');

function renderYelp() {
	axios.get(`https://api.yelp.com/v3/businesses/search?term=${typeInput}&location=${userLocation}`, {
		headers: {
			'Authorization': process.env.AUTHORIZATIONKEY
		}
	})
	.then(function (response) {
		return response.json();
	})
	.then(
		// function that parses the returned array and applies it where necessary
		function (data) {
			for (var i = 0; i < data.businesses.length; i++) {
				var dateCreator = document.createElement('option');

				// pulling display name
				dateCreator.textContent = data.businesses[i].name;

				// pulling display location
				dateCreator.textContent = data.businesses[i].location.display_address;

				// rating pulling
				dateCreator.textContent = data.businesses[i].rating;

				// price pulling
				dateCreator.textContent = data.businesses[i].price;
				}
			}
	)
	.catch(error => console.error(error));
}

document.querySelector("#populate").forEach(button => {
	button.addEventListener("click", function (event) {
		event.preventDefault();
		renderYelp();
	})
});