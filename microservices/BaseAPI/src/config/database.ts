import { Sequelize } from "sequelize-typescript";
import configurations from "./configuration";
import path from "path"

export const database = new Sequelize({
    database: configurations.database,
    dialect: "mysql",
    username: configurations.username,
    password: configurations.password,
    host: configurations.host,
    models: [path.join(__dirname, "../models")],
    pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000
    }
});