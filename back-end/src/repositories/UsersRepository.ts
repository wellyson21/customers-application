  
    import sequelize from "sequelize";
    import BaseRepository from "./BaseRespository";

    export class UsersRepository extends BaseRepository{

      constructor(entity: sequelize.ModelAttributes<sequelize.Model<any, any>, any> ){
        super(entity);
      }
      
    }
