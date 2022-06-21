  import * as Sequelize from "sequelize";

  const db = new Sequelize.Sequelize({
    database: "customers-app",
    host: "localhost",
    dialect: "mssql",
    username: "sa",
    password: "root123456",
    port: 1433
  });

  export default db;