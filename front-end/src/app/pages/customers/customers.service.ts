import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Utilities } from "src/app/@shared/utilities/utilities";


@Injectable({providedIn: "root"})
export class CustomersService{

  public subject: Subject<any> = new Subject();

  constructor(
    private httpClient: HttpClient
  ){ 
    this.get();
  }

  private get(where: any = {}){
    Utilities.request(this.httpClient, "get", "/customers", where).subscribe((res: any)=>{
      this.subject.next(res);
    });
  }

  public async update(data: any){
    return new Promise<void>((resolve, reject)=>{

      const path: string = data.id ? `/customers/${data.id}` : `/customers`;
      const method = data.id ? "put" : "post";
  
      Utilities.request(this.httpClient, method, path, data).subscribe((res: any)=>{
        if(res.status){
          this.get();
          resolve();
        }else{
          reject();
        }
      });
    });
  }

  public async delete(id: string){
    Utilities.request(this.httpClient, "delete", `/customers/${id}`).subscribe((res: any)=>{
      this.get();
    });
  }

}