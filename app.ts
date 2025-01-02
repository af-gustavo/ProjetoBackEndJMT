// Import required modules from Express.js
import express, { urlencoded } from "express";

// Import routers for clients, users, products, and orders
import clientsRouter from "./Router/clients";
import usersRouter from "./Router/users";
import productsRouter from "./Router/products";
import ordersRouter from "./Router/orders";

// Import database connection module
import db from "./db";

// Create a new Express.js application instance
const app = express();

// Enable URL-encoded parsing for incoming requests
app.use(express.urlencoded({ extended: true }));

// Mount routers for clients, users, products, and orders
app.use(clientsRouter);
app.use(usersRouter);
app.use(ordersRouter);
app.use(productsRouter);

// Set the view engine to Pug and specify the views directory
app.set("view engine", "pug");
app.set("views", "./Views");

// Connect to the database and start the server
db.sync().then(() => {
    console.log("Connected to database:", process.env.DB_NAME);
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server running on port 3000");
    });
});