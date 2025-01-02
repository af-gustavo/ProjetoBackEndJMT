// Import the database connection instance from the db module
import db from "../db"

// Import the Sequelize library, which provides a set of tools for working with databases
import sequelize from "sequelize";

//Represents a client entity in the database.
//Each client has a unique identifier, a name, and an email address.
export default db.define("client", {
    //Unique identifier for the client.
    //This field is an auto-incrementing integer and cannot be null.
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "Unique identifier for the client"
    },
    //Name of the client.
    //This field cannot be null.
    nome: {
        type: sequelize.STRING,
        allowNull: false,
        comment: "Name of the client"
    },
    //Email address of the client.
    //This field cannot be null.
    email: {
        type: sequelize.STRING,
        allowNull: false,
        comment: "Email address of the client"
    }
})