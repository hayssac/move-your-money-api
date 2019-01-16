# move-your-money-api
An API for Move Your Money app with NodeJS, Express and MongoDB

- About MongoDB

To use MongoDB locally, follow [instructions](https://docs.mongodb.com/v3.2/installation/)
The choice for this database comes solenly because of my curiosity to NoSQL database and how I can integrate it on my application

- Load the mocks

```mongoimport --db move-your-money-db --collection users --jsonArray mocks/usersMock.js```