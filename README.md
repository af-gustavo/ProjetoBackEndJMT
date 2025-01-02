# ProjetoBackEndJMT
======================

## Overview
ProjetoBackEndJMT is a backend project built using Node.js, Express.js, and Sequelize. It appears to be a RESTful API for managing clients, users, products, and orders.

## Structure
The project is organized into the following directories:

- Model: Contains the database models for clients, users, products, and orders.
- Controller: Contains the controller functions for handling requests related to clients, users, products, and orders.
- Router: Contains the router files that define the API endpoints for clients, users, products, and orders.
- Views: Contains the Pug templates for rendering views.
- db: Contains the database connection module.

## General Idea
The project is designed to manage a simple e-commerce system. The API endpoints allow for CRUD (Create, Read, Update, Delete) operations on clients, users, products, and orders.

- Clients can be created, read, updated, and deleted.
- Users can be created, read, updated, and deleted.
- Products can be created, read, updated, and deleted.
- Orders can be created, read, updated, and deleted.

The project uses Sequelize as an ORM (Object-Relational Mapping) tool to interact with the database. The database connection is established using the db module.

## API Endpoints
The API endpoints are defined in the Router directory and are mounted in the app.ts file. The endpoints are organized by resource (clients, users, products, and orders).

## Technologies Used
Node.js
Express.js
Sequelize
Pug

## Environment Variables
The project uses environment variables to store sensitive information such as database credentials. The environment variables are set in the package.json file.

## Running the Project
To run the project, navigate to the project directory and run the command npm start. The server will start listening on port 3000.
