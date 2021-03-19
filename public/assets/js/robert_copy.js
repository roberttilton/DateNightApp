var yelpContent = document.getElementById('exampleFormControlSelect2');
// example code below
var userLocation = document.querySelector('#location-field').value;
var typeInput = document.querySelector('#activity-field').value;
console.log(typeInput);
console.log(userLocation);

function renderYelp() {
	const URL = `https://api.yelp.com/v3/businesses/search?term=${typeInput}&location=${userLocation}`;
	console.log(URL);
	axios.get(URL, {
		headers: {
			'Authorization': 'rCAnqlM_1ZnGvXkWuH1wspttqOUMehZuLYGdZFD4s2XZx3mMOLTTuUFaXL0rpUpNXDWuwy42jCTJ78dMkXeKxAtZmGJ2Yzr1bfiXgB-ORDBMou_WVtBQCG6U679LYHYx'
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

				yelpContent.appendChild(dateCreator);
				}
			}
	)
	.catch(error => console.error(error));
}

document.querySelector("#datePosts")
		.addEventListener("submit", function (event) {
		event.preventDefault();
		console.log('submit event');
		renderYelp();
	});