  
  // Entities
  import CustomerEntity from "../entities/CustomerEntity";
  import UsersEntity from "../entities/UsersEntity";

  // Controllers
  import { CustomersController } from "../controllers/CustomersController";
  import { UsersController } from "../controllers/UsersController";

  // Repository
  import { CustomersRepository } from "../repositories/CustomersRepository";
  import { UsersRepository } from "../repositories/UsersRepository";


  // new UsersController(new UsersRepository(<any>UsersEntity));
  // new CustomersController(new CustomersRepository(<any>CustomerEntity));

  const controllers: any = {
    UsersController: new UsersController(new UsersRepository(<any>UsersEntity)),
    CustomersController: new CustomersController(new CustomersRepository(<any>CustomerEntity)),
  };

  export default controllers;