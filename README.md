# Book Search Engine

## Description
A fully functioning Google Books API search engine intially built with a RESTful API, but refactored to be a GraphQL API built with Apollo Server.

## Technologies used
MERN stack with a React front end, MongoDB database, GraphQL API built with Apollo Server. Includes an Apollo Provider so that requests can communicate with an Apollo Server.

## Installation
Run `npm install` then run `npm run develop` to see the application run both the client and server concurrently. To see the application in the Apollo sandbox, run `npm start`.

## Deployment
The application is deployed to Heroku with a MongoDB database using MongoDB Atlas. [Link](https://shielded-scrubland-26904.herokuapp.com/)

## Issues
Concluding deployment to Heroku with a MongoDB using MongoDB Atlas, the Heroku App had not yet become active. `! [remote rejected] main -> main (pre-receive hook declined)` was the error at 4:37pm CST on December 5, 2022. I suspect this is because Heroku servers still hadn't refreshed for the day.
