// Import the database connection instance from the db module
import db from "../db";

// Import the Sequelize library, which provides a set of tools for working with databases
import sequelize from "sequelize";

//Define the User model using Sequelize
export default db.define("user", {
    //Unique identifier for the user
    //This field is an auto-incrementing integer and cannot be null

    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    //Username chosen by the user
    //This field cannot be null
    user: {
        type: sequelize.STRING,
        allowNull: false
    },
    //Password for the user's account
    //This field cannot be null
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
});