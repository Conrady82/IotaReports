const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(
  isProduction ? process.env.DB_NAME : "iota",
  isProduction ? process.env.DB_USER : "iota_user",
  isProduction ? process.env.DB_PASSWORD : "password",
  {
    host: isProduction ? process.env.DB_HOST : "localhost",
    dialect: "mysql", // or 'postgres', 'sqlite', etc.
    logging: !isProduction,
  }
);

module.exports = sequelize;
