import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Users = db.define('users', {
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    UserType: {
        type: DataTypes.ENUM('Consultant', 'Client'),
        allowNull: false
    },
    Token: {
        type: DataTypes.STRING,
        allowNull: true  // Token untuk menyimpan JWT saat login
    }

}, {
    freezeTableName: true
});

export default Users;
