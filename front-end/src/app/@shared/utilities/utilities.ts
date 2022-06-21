import { HttpClient } from "@angular/common/http";

export class Utilities{

  public static get apiBaseUrl(){
    return "http://localhost:2000";
  }

  public static get isLogged(): boolean{
    return localStorage.getItem("isLogged")  == "true";
  }

  public static redirect(path: string){
    window.location.href = `${window.location.protocol}//${window.location.host}${path}`;;
  }

  public static request(httpClient: HttpClient, type: "get" | "post" | "put" | "delete", path: string, data: any = {}){
    const isSendData = type == "post" || type == "put" ;
    const headers: any = {headers: {"Content-Type": "application/json", "access_token": localStorage.getItem("access_token") || "" }};
    return isSendData ? httpClient[type](`${this.apiBaseUrl}${path}`, JSON.stringify(data), headers) : httpClient[type](`${this.apiBaseUrl}${path}`, headers);
  }
}