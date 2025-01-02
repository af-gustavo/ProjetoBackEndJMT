// Import the database connection instance from the db module
import db from "../db"
import sequelize from "sequelize";

// Define the Product model using Sequelize
export default db.define("product", {
    // Unique identifier for the product
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // Name of the product
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    // Description of the product
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    // Value of the product
    value: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
})