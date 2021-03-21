// var yelpContent = document.getElementById('exampleFormControlSelect2');
// // example code below
// var userLocation = document.querySelector('#activity-field').value;
// var typeInput = document.querySelector('#location-field').value;
import axios from "axios";

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
function renderYelp() {
	console.log('renderYelp entered...');
	var yelpContent = document.getElementById('exampleFormControlSelect2');
	var userLocation = document.querySelector('#location-field').value;
	var typeInput = document.querySelector('#activity-field').value;
	const options = {
		method: 'GET',
		url: 'https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/',
		params: {Title: `'${userLocation}'`},
		headers: {
		  'content-type': 'application/json',
		  'x-rapidapi-key': '0541b8cacfmsh933b0996a54232bp123830jsnc9b37c5006cd',
		  'x-rapidapi-host': 'ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com'
		}
	  };
	  axios.request(options).then(function (response) {
		console.log(response.data);
	}).catch(function (error) {
		console.error(error);
	})
	.then(
		// function that parses the returned array and applies it where necessary
		function (data) {
			for (var i = 0; i < data.businesses.length; i++) {
				var dateCreator = document.createElement('option');
				let response = JSON.stringify(data.request.response);
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