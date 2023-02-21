import "dotenv/config";
import { Dialect } from "sequelize";

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER as string,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_REPORT,
  dialect: process.env.MYSQL_DIALECT as Dialect,
};

export default config;
