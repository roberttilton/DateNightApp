var yelpContent = document.getElementById('datePosts');
// example code below
var userLocation = document.querySelector('.location-field');
var typeInput = document.querySelector('.activity-field');

var entertainmentArray = [];
var foodArray = [];

var postObject = {
	'Food': foodArray,
	'Entertainment': entertainmentArray
}

function renderYelp(type) {
	yelpContent.innerHTML = "";
	// checking if there are any posts to show and returning a statement
	if (postObject[type].length === 0) {
		console.log("Nothing to do around here!");

		yelpContent.appendChild(noFlair);
		return;
	}

	for (const post of postObject[type]) {
		yelpContent.appendChild(post);
	}
}
// AJAX CALL HERE
// fetch(`https://api.yelp.com/v3/businesses/search?term=${typeInput}&location=${userLocation}`)
// 	.then(function (response) {
// 		return response.json();
// 	})
function ajaxCall () {
$.ajax({
	type: 'GET',
	  dataType:"json",
	url: 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=newyorkcity',
	headers: {         
		'Authorization' : 'Bearer rCAnqlM_1ZnGvXkWuH1wspttqOUMehZuLYGdZFD4s2XZx3mMOLTTuUFaXL0rpUpNXDWuwy42jCTJ78dMkXeKxAtZmGJ2Yzr1bfiXgB-ORDBMou_WVtBQCG6U679LYHYx',
		
	},
	success: function (data, status, xhr) {
	  console.log('data: ', data);
	}
  })
	.then(
		// function that parses the returned array and applies it where necessary
		function (data) {
			console.log(data);
			for (var i = 0; i < data.data.hits.length; i++) {
				var dateCreator = document.createElement('option');
				// pulling display named
				dateCreator.appendChild(data.hits[i].Title);
				console.log('are we dating yet')
				// pulling display location
				dateCreator.innerHTML = data.hits[i].Type;
				console.log('probably not')
				// rating pulling
				dateCreator.innerHTML = data.hits[i].IvaRating;

				mediaContent.appendChild(dateCreator);
				}
			}
		}
	);

	document.querySelector("#populate")
		.addEventListener("click", function (event) {
		event.preventDefault();
		console.log('submit event');
		// console.log(typeInput);
		// console.log(userLocation);
		ajaxCall();
	});