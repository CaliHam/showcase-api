# my-anime-ship-api
### [View The Deployed API Here](https://my-anime-ship-api.onrender.com)
### [View Front-End Repo for this API](https://github.com/CaliHam/my-anime-ship)
## Overview

This is an API that serves data for anime characters and zodiac synastry. Each anime character has an id, name, birthday, gender, month, day, zodiac_sign, anime, likes, dislikes, image_url, and wiki_page_url property. Constructed using Express.js and deployed to Render.com. 

## Set Up
Follow these steps to set up and run the backend API:

1. Clone the repository: Start by cloning this repository to your local machine using the following command:  
`git@github.com:CaliHam/showcase-api.git`

2. Install dependencies: Navigate to the cloned repository's directory and install the required dependencies using your package manager:  
`cd showcase-api`  
`npm install`

3. Start the server: Once the dependencies are installed and the environment variables are set, start the backend server with the following command:  
`npm start`    
If you prefer automatic server restarts during development, use nodemon with the following command:  
`node server.js`

## Endpoints

`https://my-anime-ship-api.onrender.com/` + `endpoint`

  |             Endpoint              |              Use             |   Method   |  Required Properties for Request |
  |-----------------------------------|:----------------------------:|:----------:|:--------------------------------:|
  |       `/api/v1/characters`         |      get all character data      |    GET     |               none               |
  | `/api/v1/savedreports/`              |  get all saved reports data  |    GET     |               none               |
  |       `/api/v1/characters/:id`        |      get a single character      |    GET     |               none               |
|       `/api/v1/savedreports`        |      post to saved reports      |    POST     |`{ "id", "user", "report", "selectedCharacter" }`|
| `/api/v1/synastry`                | retrieve compatibility results |    POST    | `{ "month1", "day1", "month2", "day2" }`|
| `/api/v1/zodiac`                  | retrieve zodiac sign          |    POST    | `{ "month", "day" }`|
| `/api/v1/savedreports/:id`        | delete saved result           |    DELETE  | `{ "id" }`|

## Future Extensions
 - [ ] Add search feature within saved results
 - [ ] Add a suggestions form for the user to suggest a character
 
## Tools & Technologies
 - Express
 - Render