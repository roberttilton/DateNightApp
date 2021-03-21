function renderYelp() {
	console.log('renderYelp entered...');
	var yelpContent = document.getElementById('exampleFormControlSelect2');
	var userLocation = document.querySelector('#location-field').value;
	var typeInput = document.querySelector('#activity-field').value;
	const URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${typeInput}&location=${userLocation}`;
	console.log(URL);
	axios.get(URL, {
		headers: {
			Authorization: 'Bearer rCAnqlM_1ZnGvXkWuH1wspttqOUMehZuLYGdZFD4s2XZx3mMOLTTuUFaXL0rpUpNXDWuwy42jCTJ78dMkXeKxAtZmGJ2Yzr1bfiXgB-ORDBMou_WVtBQCG6U679LYHYx',
			'Content-Type': 'application/json'
		}
	})
		.then(function (response) {
			console.log(response);
			for (var i = 0; i < response.data.businesses.length; i++) {
				var dateCreator = document.createElement('option');

				// pulling display named
				var businessName = document.createElement('span');
				businessName.textContent = response.data.businesses[i].name;

				// pulling display location
				var displayLocation = document.createElement('span');
				displayLocation.textContent = response.data.businesses[i].location.display_address;

				// rating pulling
				var businessRating = document.createElement('span');
				businessRating.textContent = response.data.businesses[i].rating;

				// price pulling
				var priceYelp = document.createElement('span');
				priceYelp.textContent = response.data.businesses[i].price;

				dateCreator.appendChild(businessName);
				dateCreator.appendChild(displayLocation);
				dateCreator.appendChild(businessRating);
				dateCreator.appendChild(priceYelp);
				yelpContent.appendChild(dateCreator);
			}
			return response.json;
		})
		.then(
			// function that parses the returned array and applies it where necessary
			function (response) {
				for (var i = 0; i < response.businesses.length; i++) {
					var dateCreator = document.createElement('option');

					// pulling display named
					dateCreator.textContent = response.businesses[i].name;
					console.log(dateCreator);
					// pulling display location
					dateCreator.textContent = response.businesses[i].location.display_address;
					console.log(dateCreator);
					// rating pulling
					dateCreator.textContent = response.businesses[i].rating;

					// price pulling
					dateCreator.textContent = response.businesses[i].price;

					yelpContent.appendChild(dateCreator);
				}
			}
		)
		.catch(error => console.error(error));
}

document.querySelector("#populate")
	.addEventListener("click", function (event) {
		event.preventDefault();
		console.log('submit event');
		// console.log(typeInput);
		// console.log(userLocation);
		renderYelp();
	});