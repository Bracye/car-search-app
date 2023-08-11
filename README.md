# Vehicle Search App

## Website: https://vehiclesearch.netlify.app/

## A vehicle search app that gets data from two apis to display different vehicle specs based on make and model.

This project is an submission for my Software Engineering class for a Module 2 final project. This project showcases the following:

- A homepage that directs users to two different categories of vehicles.
- Within the categories, users can search for a specific make and model of their choice.
- Results are fetched using Axios and displayed using the `useEffect` hook.
- The app displays data from the APIs, including spec details such as make, model, year, and more.
- Users can navigate between different categories or return to the homepage using navigation links powered by React Router.

## Installation

- Clone the repository: git clone https://github.com/your-username/vehicle-search-app.git

- Get to the project folder: cd vehiccle-search-app

- Install: npm install

- Get API Keys for set up: https://rapidapi.com/apininjas/api/cars-by-api-ninjas Docs: https://api-ninjas.com/api/cars

- Run app: npm start

## Issues

The only known issue at the moment is that the search results do not revert to their default (empty) state when both the make and model inputs are empty.
