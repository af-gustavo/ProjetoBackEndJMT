// Import the Sequelize library
import { Sequelize } from "sequelize";

// Retrieve the database name from the environment variables
const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

// Create a new Sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost
});

// Export the Sequelize instance
export default sequelize;