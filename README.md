# ChemEventz - NodeJS API
&nbsp;

## About ChemEventz!

ChemEventz is a web application that tracks chemical events around the world. 
ChemEventz has been designed to be a collaborative platform to facilitate meetings between researchers, professors, students or anyone interested in these events.

How to make these meetings easier?
  - ChemEventz lists recent events of the most popular events sites
  - Allows users of the platform to add the next known events
  - ChemEventz may allow you to find your future collaborator, job or internship during these meetings


ChemEventz is divided into 5 parts available in my Github account  [public repositories][Git]
  - [ChemEventz - scraper][GitScrap]  
  - [ChemEventz - NodeJS - API][GitNodeJS] 
  - [ChemEventz - Spring Boot Microservice Authentication][GitSpringAuth]
  - [ChemEventz - Spring Boot Microservice Events][GitSpringEvents]
  - [ChemEventz - Angular][GitAngular]

  
### Tech Dev

Dillinger uses a number of open source projects to work properly:

* [Angular] - HTML enhanced for web apps!
* [node.js] -  v12 for the backend
* [Express] - fast node.js network app framework
* [Spring Boot] - focus on application-level business logic
* [MongoDB] - non-relationnal database for events storage
* [Mysql] - relational dataBase for users data storage

### Tech Prod

Different technologies used to deploy ChemEventz project:

* [Heroku] - Deploy Spring and NodeJS microservices
* [AWS S3] - Deploy Angular microservice
* [AWS RDS] - Cloud MYSQL database Hosting
* [Mongo Atlas] - Cloud MongoDB database Hosting

&nbsp;
______________________________________

&nbsp;
# ChemEventz - NodeJS API

### Tech Dev
* [Node.js] - V12 for the backend
* [Express] - fast node.js network app framework
* [MongoDB] - save all events after treatment



### Installation

ChemEventz requires [Node.js](https://nodejs.org/) V12 to run.

Create new folder

```sh
$ git clone https://github.com/nawelb/ChemEvents_Back_NodeJS
$ cd ChemEvents_Back_NodeJS
$ npm install
```
then, create .env file in root directory and add :
 - PORT : free port to allow this application to run
 - DB_NAME : as name of your database [cf scraping project]
 - DB_URL : as url of MongoDB Atlas where the scraping data are stored [cf scraping project]
 - DB_COLLECTION : as the name of the collection you choose [cf scraping project]

### Run NodeJS API

```sh
$ node server.js
```


### API URLs

POST
- /event-api/private/role-admin/event

/GET
- /event-api/public/events : get all data in the database
- /event-api/public/event/:_id : replace ":_id" by an event id in the db, to search an event by id
- /event-api/public/search?research=word : replace "word" by any keyword, to search an event by keyword
- /event-api/public/event?country=France : replace "France" by any country name, to search an event by country
- /event-api/public/event?city=Paris : replace "Paris" by any city name, to search an event by city


/PUT
- /event-api/private/role-admin/event

/DELETE
- /event-api/private/role-admin/deleteEvent/:_id  : replace ":_id" by an event id in the db, to delete an event by id


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Git]: <https://github.com/nawelb>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Angular]: <https://angular.io>
   [Heroku]: <https://heroku.com>
   [Spring Boot]: <https://spring.io/projects/spring-boot>
  [GitAngular]: <https://github.com/nawelb/ChemEvents_Front_Angular_Security>
  [GitSpringEvents]: <https://github.com/nawelb/ChemEvents_Back_Spring_Events>
  [GitSpringAuth]: <https://github.com/nawelb/ChemEvents_Back_Spring_Security>
  [GitNodeJS]: <https://github.com/nawelb/ChemEvents_Back_NodeJS>
  [GitScrap]: <https://github.com/nawelb/ChemEvents_Scraper>
  [cf scraping project]: <https://github.com/nawelb/ChemEvents_Scraper>
  [AWS S3]: <https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html>
  [AWS RDS]: <https://aws.amazon.com/fr/rds/>
  [Mongo Atlas]: <https://www.mongodb.com/cloud/atlas>
  [MongoDB]: <https://www.mongodb.com/fr>
[MySQL]:<https://www.mysql.com/fr/>



