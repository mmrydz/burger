-- Create the database and specify it for use. Create the table burgers.
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false
);

