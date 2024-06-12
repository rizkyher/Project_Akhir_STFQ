import { sequelize } from "sequelize";

const db = new sequelize('fk_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db