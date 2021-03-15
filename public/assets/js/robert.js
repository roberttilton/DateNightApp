var yelpContent = document.getElementById('datePosts');

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

fetch(`https://api.yelp.com/v3/businesses/search`)
	.then(function (response) {
		return response.json();
	})
	.then(
		// function that parses the returned array and applies it where necessary
		function (data) {
			for (var i = 0; i < data.data.children.length; i++) {
				var dateCreator = document.createElement('option');

				// name of event/restaurant pulling
				var yelpPosts = document.createElement('p');
				yelpPosts.textContent = data.data.children[i].data.title;

				// username parsing
				var yelpUsers = document.createElement('span');
				yelpUsers.textContent = data.data.children[i].data.author;

				// upvote/score parsing
				var yelpScore = document.createElement('span');

				// url parsing, to add permalink to the clickable link functionality
				const link = data.data.children[i].data.permalink;

				// adding the results to the page
				dateCreator.appendChild(yelpPosts);
				dateCreator.appendChild(yelpUsers);
				dateCreator.appendChild(yelpScore);
				dateCreator.addEventListener("click", function () {
					window.open(`https://www.yelp.com${link}`, "_blank");
				});
				// adding classes for styling
				dateCreator.classList.add("yelp-post");
				yelpPosts.classList.add("post-title");
				yelpUsers.classList.add("post-author");
				yelpScore.classList.add("post-score");
				// creating and appending element for the upvote
				var upvote = document.createElement("i");
				upvote.className = "fas fa-arrow-up";
				yelpScore.appendChild(upvote);
				yelpScore.append(data.data.children[i].data.score);
				// checking content for flair and pushing 
				var currentFlair = data.data.children[i].data.link_flair_text;
				if (Object.keys(postObject).includes(currentFlair)) {
					postObject[currentFlair].push(dateCreator);
				}
			}
		}
	);