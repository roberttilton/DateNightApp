const yelpFormHandler = async function (event) {
    event.preventDefault();
    const yelpContent = document.getElementById('exampleFormControlSelect2');
    const userLocation = document.querySelector('#location-field');
    const typeInput = document.querySelector('#activity-field');


    const response = await fetch('/api/yelp/events', {
        method: 'POST',
        body: JSON.stringify({
            yelpContent: yelpContent.value,
            userLocation: userLocation.value,
            typeInput: typeInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json()

    for (var i = 0; i < data.businesses.length; i++) {
        const option = document.createElement("option");
        const text = document.createTextNode(`${data.businesses[i].name} - ${data.businesses[i].location.display_address} - ${data.businesses[i].rating} - ${data.businesses[i].price}`);
        option.appendChild(text);
        yelpContent.appendChild(option);

    }
};

function createYourDate() {
    event.preventDefault();
    const whoDate = document.getElementById('who').value;
    console.log(whoDate);
    const whenDate = document.getElementById('when').value;
    console.log(whenDate);
    const yelpContent = document.getElementById('exampleFormControlSelect2');
    var yelpDatabase = yelpContent.options[yelpContent.selectedIndex].text;
    console.log(yelpDatabase);
    
    Dates.create({ activity: yelpDatabase, partner_name: whoDate, time_date: whenDate })
}

// const yelpContent = document.getElementById('exampleFormControlSelect2').text;
// console.log(yelpContent);
// how to look at select value based on option selection

//collect all of the form values to store in the db {event: "", guest: "", date: "", user_id: ""}

document.querySelector('#populate').addEventListener('click', yelpFormHandler);
document.querySelector('#populate3').addEventListener('click', createYourDate);