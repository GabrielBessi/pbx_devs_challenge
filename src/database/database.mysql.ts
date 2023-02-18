import "dotenv";
import mysql from "mysql2";
import { Sequelize } from "sequelize";
import config from "./config.database";
import "dotenv";

const connectMysql = async () => {
  const { host, port, user, password, database } = config;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

  const sequelize = new Sequelize(database, user, password, {
    dialect: process.env.MYSQL_DIALECT,
  });
};

export default connectMysql;
