-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
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
  
-- sample data input
INSERT INTO "media" ( title, movie, season_number, number_of_episodes, platform, status_id)
VAlUES
	('The House Trap', true, null, null, 'netflix', '1'),
	('Hitman', true, null, null, 'hulu', '2'),
	('Despicable Me 4', true, null, null, 'prime', '3'),
	('Fall Guy', true, null, null, 'disney+', '4'),
	('Stranger Things', false, 1, 15, 'netflix', '1'),
	('Brooklyn 99', false, 2, 12, 'hulu', '2'),
	('Bob"s burger season 1', false, 3, 8, 'prime', '3'),
	('Bob"s burger season 2', false, 2, 8, 'prime', '3'),
	('Bob"s burger season 3', false, 1, 8, 'prime', '3'),
	('Friends', false, 1, 25, 'disney+', '4');
