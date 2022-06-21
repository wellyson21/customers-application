  import { Request, Response } from "express";
  import { UsersRepository } from "../repositories/UsersRepository";
  import { JWT } from "../utilities/Security";
  import { BaseController } from "./BaseController";

  export class UsersController extends BaseController<UsersRepository>{

    constructor(repository: UsersRepository){
      super(repository);
    }

    public login(request: Request, response: Response){
      (async ()=>{
        try{

          const data = (<any>request).body;
          data.password = JWT.createSha256(data.password);

          const hasuser = (await this.repository.get(data)).length > 0;
    
          if(hasuser){
            const token = (await JWT.getToken({email: data.email}));
            response.status(200).send({status: true, data: {token: token}});
          }else{
            response.status(401).send({status: false, data: {token: null}});
          }
        }catch(e){

          response.status(401).send({status: false, data: {token: null}});
        }
      })();
    }

    public refreshtoken(request: Request, response: Response){

      if(!JWT.checkToken(request.header("access_token")?.toString(), response)){ return; }

      JWT.getToken(JWT.getPayloadToken(request.header("access_token"))).then((token)=>{
        response.status(200).send({ status: true, token });
      }).catch((error)=>{
        response.status(401).send({ message: error.message });
      });
    }

    public register(request: Request, response: Response): void {
      
      const data = (<any>request).body;
      data.password = JWT.createSha256(data.password);

      super.register(request, response, false);
    }

    public update(request: Request, response: Response): void {
      
      const data = (<any>request).body;
      data.password = JWT.createSha256(data.password);

      super.update(request, response);
    }


  }