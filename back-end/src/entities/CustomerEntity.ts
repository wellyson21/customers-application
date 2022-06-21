  import * as sequelize from "sequelize";
  import db from "../database/Database";

  const CustomerEntity: sequelize.ModelAttributes<sequelize.Model<any, any>, any> = {
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
    phone: sequelize.STRING(15),
    email: sequelize.STRING(200),
    address: {
      type: sequelize.STRING,
      allowNull: false 
    }
  };

  export default db.define("customers", CustomerEntity);

