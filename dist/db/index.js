"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConnection = void 0;
const { Sequelize } = require('sequelize');
class DataBaseConnection {
    getInstance() {
        if (DB.databaseInstance)
            return DB.databaseInstance;
        DB.databaseInstance = this.createDBInstance();
        return DB.databaseInstance;
    }
    createDBInstance() {
        return new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.DB_HOST,
            dialect: 'mysql'
        });
    }
}
exports.DataBaseConnection = DataBaseConnection;
DataBaseConnection.databaseInstance = null;
