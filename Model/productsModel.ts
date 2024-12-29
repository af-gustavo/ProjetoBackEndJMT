import db from "../db"
import sequelize from "sequelize";

export default db.define("product", {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    value: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
})