import { Sequelize } from "sequelize";
import config from "./config.database";
import "dotenv";

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
