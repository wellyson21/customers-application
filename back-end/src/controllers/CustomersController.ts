import { CustomersRepository } from "../repositories/CustomersRepository";
import { BaseController } from "./BaseController";

export class CustomersController extends BaseController<CustomersRepository>{

  constructor(repository: CustomersRepository){
    super(repository);
  }

}