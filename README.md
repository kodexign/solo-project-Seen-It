Seen-It
Seen-It is a web application that allows users to browse and keep track of movies and TV shows they have seen, want to see, or are currently watching. Users can search for their favorite titles, mark them as watched, and add them to their personalized lists for better movie management.


## Prerequisites

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org)
- [Nodemon](https://nodemon.io)

## Create Database and Table

Create a new database called `prime_app` and create the following tables:

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
 
 CREATE TABLE "media" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "movie" boolean NOT NULL,
    "season_number" INT,
    "number_of_episodes" INT,
    "platform" VARCHAR,
    "user_id" INT,
    "status_id" INT
   
);


 CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "type" varchar
   
);

INSERT INTO "status" ("type" )
VALUES
  ('completed'),
  ('currently_watching'),
  ('to_watch'),
  ('did_not_finish'
  );
  

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`.

## Installation
1. Fork and clone this repository for your own access.
2. Run an npm install within this repository's root directory.
3. Create a database named prime_app.
4. This application is configured to connect to a PostgreSQL database. You'll need to create this database within a locally installed PostgreSQL instance.
5. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.
6. I recommend using Postico to run those queries as that was used to create the queries
7. Run npm run server in your terminal to start the Express server.
8. Run npm run client in your terminal to start the Vite dev server (which servers the React app).
9. Navigate to `localhost:5173`.


## Usage
1. Without being logged in, the user can see the login page or the About page.
2. A user can register or login if they already have a username and password.
3. Once logged in, a user can:
  - see additional pages: 
    - Currently Watching
    - Watched
    - To Be Watched
    - Did Not Finish 
    - Add New Media
  - Add titles to their lists
  - update watch status of media lists or delete any titles on their list


## Built With
Node.js
Express
Axios
React.js
Redux
Redux-Saga
PostgreSQL
MUI

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.


