  import * as sequelize from "sequelize";
  import db from "../database/Database";

  const UsersEntity: sequelize.ModelAttributes<sequelize.Model<any, any>, any>  = {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING(100),
      allowNull: false,
    },
    email: {
      type: sequelize.STRING(200),
      unique: true,
      allowNull: false
    },
    password: {
      type: sequelize.STRING(500),
      allowNull: false
    }
  };

  export default db.define("users", UsersEntity);

