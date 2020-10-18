DROP DATABASE IF EXISTS managmentSystemDB;
CREATE DATABASE managmentSystemDB;

USE managmentSystemDB;

-- Create the table department.
CREATE TABLE department (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);
-- Create the table role.
CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department INTEGER NOT NULL
);
-- Create the table employee.
CREATE TABLE employee (
  id int PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INTEGER NOT NULL,
  managerId INTEGER NULL
);