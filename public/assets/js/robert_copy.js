// var yelpContent = document.getElementById('exampleFormControlSelect2');
// // example code below
// var userLocation = document.querySelector('#activity-field').value;
// var typeInput = document.querySelector('#location-field').value;

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
		return response.json;
	})
	.then(
		// function that parses the returned array and applies it where necessary
		function (data) {
			for (var i = 0; i < data.businesses.length; i++) {
				var dateCreator = document.createElement('option');
				
				// pulling display named
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

// const formEl = document.querySelector('#datePosts');
// console.log("formEl", formEl);
// formEl.addEventListener('submit', function(event) {
// 	event.preventDefault();
// 	console.log('submit event');
// 	renderYelp();
// })

document.querySelector("#populate")
		.addEventListener("click", function (event) {
		event.preventDefault();
		console.log('submit event');
		// console.log(typeInput);
		// console.log(userLocation);
		renderYelp();
	});