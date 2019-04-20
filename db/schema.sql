-- Create the database and specify it for use. Create the table burgers.
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false
);

