  import { Request, Response } from "express";
  import BaseRepository from "../repositories/BaseRespository";
  import { JWT } from "../utilities/Security";

  export abstract class BaseController<T extends BaseRepository>{

    protected repository: T;

    constructor(repository: T){
      this.repository = repository;
    }

    public get(request: Request, response: Response){

      if(!JWT.checkToken(request.header("access_token")?.toString(), response)){ return; }

      this.repository.get(request.query).then((res)=>{
        response.status(200).send(res);
      }).catch((error)=>{
        response.status(500).send({message: error.message});
      });
    }

    public register(request: Request, response: Response, autenticate: boolean = true){

      if(autenticate && !JWT.checkToken(request.header("access_token")?.toString(), response)){ return; }

      const data = (<any>request).body;

      this.repository.register(data).then((res)=>{
        response.status(201).send({status: true, data: res});
      }).catch((error)=>{
        response.status(500).send({message: error.message});
      });
    }

    public update(request: Request, response: Response){

      if(!JWT.checkToken(request.header("access_token")?.toString(), response)){ return; }

      const data = (<any>request).body;

      this.repository.update(data, {where: {id: parseInt(request.params?.id?.toString()) }}).then((res)=>{
        response.status(200).send({status: true, data: res});
      }).catch((error)=>{
        response.status(500).send({message: error.message});
      });
    }

    public delete(request: Request, response: Response){

      if(!JWT.checkToken(request.header("access_token")?.toString(), response)){ return; }

      this.repository.delete(parseInt(request.params.id.toString())).then((res)=>{
        response.status(200).send({status: true, data: res});
      }).catch((error)=>{
        response.status(500).send({message: error.message});
      });
    }

  }