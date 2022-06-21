  import sequelize from "sequelize";
  import UsersEntity from "../entities/UsersEntity";

  export default abstract class BaseRepository{

    protected entity: sequelize.ModelStatic<any> | any;

    constructor(entity: sequelize.ModelStatic<any> | any){
      this.entity = entity
    }
    
    public async get(where: any = null){
      return this.entity.findAll({where: where, limit: 1000 });
    }

    public async register(data: any){
      return this.entity.create(data);
    }

    public async update(data: any, where?: any){
      return this.entity.update(data, where);
    }

    public async delete(id: number){
      return this.entity.destroy({where: {id: id}, limit: 1});
    }

  }