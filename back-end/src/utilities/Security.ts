  import * as jwt from "jsonwebtoken";
  import * as crypto from "crypto";

  export class JWT{
    
    private static JWT_SECRET = "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAkcd7iupXSHhgIRat";

    public static async getToken(payload: any = {}){
      return new Promise<any>((resolve, reject)=>{
        const expiresMinutes = (1000 * 60 ) * 15;

        jwt.sign(payload, JWT.JWT_SECRET, {expiresIn: expiresMinutes+"ms"}, (error, token)=>{

          if(error){
            reject(error);
            return;
          }
          
          resolve(token);
        });
      })
    }

    public static checkToken(token: string, response?: any){
      try{

        const payload: any = jwt.verify(token, JWT.JWT_SECRET);

        const status = (()=>{
          return (Math.floor((new Date).getTime() / 1000)) <= payload.exp;
        })();

        if(!status && response){
          response.status(401).send({message: "invalid token"});
          return false;
        }

        return !!status;
      }catch(e){

        response.status(401).send({message: "invalid token"});
        return false;
      }
    }

    public static createSha256(value: string){
      return crypto.createHash("sha256").update(value).digest().toString("base64");;
    }

    public static getPayloadToken(token: string){
      return {email: (<any>jwt.verify(token, JWT.JWT_SECRET)).email };
    }

  }