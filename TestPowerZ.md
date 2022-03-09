# Technical test

## PROJECT

I have used a NestJS back-end with POstGresQL database.

I have used Docker to create a container for postgresQL, install Docker here : https://www.docker.com/products/docker-desktop

after installed, then type in your terminal :
`docker run --name {name_Your_container} -p 5432:5432 -e POSTGRES_PASSWORD=root -d postgres`

you will have the id of the container '34767677dgjfhgj etc.."

then, install pgAdmin : https://www.pgadmin.org/download/

create a server (give it a name for example Server3000) with the port and the password postgres you have had before, create also a database named 'root' in Server3000/databases.

Now you can do after cloning :

`cd back`

`yarn start:dev`

Normally it has to render 0 errror.

For the front, I have used React with TypeScript :

`cd front`

`npm start`

## Project description

Create a basic Javascript Weather App (both back-end & front-end) to display current weather in locations around the world.

You are free to mock certain parts of the application if you would rather concentrate on other features.

The app features are the following:

- Search for a location and display the current weather.
- Display the weather at the user's location.
- Sign up / sign in user.
- Save a list of favorite locations.

## Back-end requirements

- Backend must be in Javascript or TypeScript. Use any/all modern language features you wish.
- You are free to depend on whichever modules/dependencies you need as long as they are publicly installable or come bundled with your code.
- Data storage solution of your choice.
- Retrieve weather data from source of your choice.

## Front-end requirements

- Front can be in Javascript or TypeScript. Use any/all modern language features you wish.
- Framework of your choice
- You are free to depend on whichever modules/dependencies you need as long as they are publicly installable or come bundled with your code
- Only basic styling required, the bare-minimum amount to make the application usable.
- Weather data must be fetched via the back-end you create
- The home page must have the following features:
- Display weather info for the user's current location
- Display weather for a searched location
- When signed-in: list of favorites
- When signed-in: add/remove favorites
- Sign-up/sign-in page
- Allow the user to sign-in or sign-up.

## Delivery

The project must include a short README on the technical choices you have made and be easily runnable via NPM/Yarn install & start for both back-end and front-end.

If possible, have it hosted somewhere publicly accessible.
