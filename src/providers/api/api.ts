import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {getTsFilePaths} from "@ionic/app-scripts/dist/upgrade-scripts/add-default-ngmodules";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url:string = 'https://example.com/api/v1';
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  
  get(endpoint:string,params?:any,reqOpts?:any){
    if(!reqOpts){
      reqOpts={
        params:new HttpParams()
      };
    }
    if(params){
      reqOpts.params = new HttpParams();
      for (let k in params){
        reqOpts.params.set(k,params[k]);
      }
    }
    
    return this.http.get(this.url+'/'+endpoint,reqOpts);
  }
  
  post(endpoint:string,body:any,reqOpts?:any){
    return this.post(this.url+'/'+endpoint,body,reqOpts);
  }
  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
  
  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }
  
  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
  
  
 

}
