import express, { urlencoded } from "express";
import clientsRouter from "./Router/clients";
import usersRouter from "./Router/users";
import productsRouter from "./Router/products";
import ordersRouter from "./Router/orders";
import db from "./db"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(clientsRouter);
app.use(usersRouter);
app.use(ordersRouter);
app.use(productsRouter);
app.set("view engine", "pug");
app.set("views", "./Views");


db.sync().then(() => {
    console.log("Conectado ao banco de dados:" + process.env.DB_NAME);
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Servidor rodando na porta 3000");
    });
});