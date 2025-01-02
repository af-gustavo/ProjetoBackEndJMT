// Import the Sequelize database instance from the db module
import db from "../db";

// Import the Sequelize library
import sequelize from "sequelize";

// Import the clientsModel and productsModel to establish relationships between tables
import clientsModel from "./clientsModel";
import productsModel from "./productsModel";

//Define the Order model using Sequelize
export default db.define("order", {
    //Unique identifier for the order
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    //Foreign key referencing the Clients table
    id_customer: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: clientsModel,
            key: 'id'
        }
    },
    //Foreign key referencing the Products table
    id_product: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: productsModel,
            key: 'id'
        }
    },
    // Quantity of the product ordered
    quantity: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
});