# DateNightApp
### Goal
- Create a program that allows users to find local events, restaurants. and more in the area. With this information, users can plan a date and save this information to be refrenced later. This allows people to log the time of their past dates as well as the location of the date. 

### User Manual
Either login or sign up on the home page. Next the user can enter what type of activity they are lookin for and enter their location. This will populate local events and the user can choose one. Next the user will input who they are taking on a date as well as the day of the date. This date will then be posted in the users profile in orfder to be refrenced later.

### Styles Used
- Vanilla CSS
- Javascript
- Bootstrap
- JQuery

### New Technology Used
- Back End API Call


### API Used
[Yelp API](https://www.yelp.com/developers/documentation/v3)

### Creator Contributions
### Robert Tilton
- Worked to implement beginnings of Yelp API call, struggling against issues with CORS
- Designed method of pulling the selected content from the API call + the inputted date parameters (name of partner and time and date)
- Helped with some HTML structure and design
Assisted in sessions/routing work where needed



### Navid Ebrahimi
- Worked on routing and sessions to become operational when presented with the   homepage.
- Make unique sessions that would not allow you to create multiple users with the same ID.
- Worked on HTML for the website.
- Reworked API call to bypass cors proxy with the YELP API. Did this by creating two fetch calls. One to our server and the other to the YELP database.
Converted Authorization Key to an environmental variable for security purposes. 



### Isiah Feeley
- Edit generated card
- Added email functionality
- Create logos
- Added folder structure
- Create ReadMe


PLEASE NOTE: This project requires to be deployed locally in order to function at this point, using any method of launch you prefer (npx nodemon, node server.js, so on and so forth.) We were unable to get Heroku to cooperate with us at any point the entire project!

Built with Visual Studio Code
