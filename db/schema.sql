DROP DATABASE IF EXISTS dates_db;

CREATE DATABASE dates_db;

USE dates_db;

CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE dates (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    activity VARCHAR(50) NOT NULL,
    activity_title VARCHAR(50) NOT NULL, 
    address VARCHAR(100) NOT NULL,
    date VARCHAR(75) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);