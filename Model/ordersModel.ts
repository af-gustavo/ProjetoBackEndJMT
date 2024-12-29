import db from "../db"
import sequelize from "sequelize";
import clientsModel from "./clientsModel";
import productsModel from "./productsModel";

export default db.define("order", {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_customer: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: clientsModel,
            key: 'id'
        }
    },
    id_product: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: productsModel,
            key: 'id'
        }
    },
    quantity: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
})