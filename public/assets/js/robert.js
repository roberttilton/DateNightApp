var mediaContent = document.getElementById('exampleFormControlSelect2');

function renderYelp() {
	console.log('renderYelp entered...');
	var titleInput = document.querySelector('#location-field').value;
	const options = {
		method: 'GET',
		url: 'https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/',
		params: {Title: `'${titleInput}'`},
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