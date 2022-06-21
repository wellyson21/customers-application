  import db from "../database/Database";
  
  require("../entities/UsersEntity");
  require("../entities/CustomerEntity");

  export default {
    sync: ()=> db.sync({force: false}).then((res)=>{ }).catch(error=>{ })
  };