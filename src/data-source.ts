import { Sequelize } from "sequelize";
import "dotenv";
import config from "./database/config.database";

const sequelize = new Sequelize(
  config.database!,
  config.user,
  config.password,
  {
    host: config.host!,
    dialect: config.dialect,
  }
);

export default sequelize;
