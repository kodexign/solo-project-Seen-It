-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

 CREATE TABLE "media" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "movie" boolean,
    "season_number" INT,
    "number_of_episodes" INT,
    "platform" VARCHAR,
    "user_id" INT,
    "status_id" INT
   
);

 CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "completed" VARCHAR,
    "currently_watching" VARCHAR,
    "to_watch" VARCHAR,
    "did_not_finish" VARCHAR
   
);