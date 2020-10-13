-- Create the database managmentSystem and specified it for use.
DROP DATABASE IF EXISTS
CREATE DATABASE managmentSystem;

USE managmentSystem;

-- Create the table department.
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
