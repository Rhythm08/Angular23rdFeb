import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpclient:HttpClient) { }
  url = 'http://localhost:3000/Project';
  getProject(){
    return this.httpclient.get(this.url);
  }
    url1= 'http://localhost:3001/project_status'
    getProjectStatus(){
      return this.httpclient.get(this.url1);
    }
    updateStatus(updateStatus:any,updatedata:any){
      console.log("The val "+ updateStatus,"---->",updatedata);
        return this.httpclient.put(this.url+'/'+updateStatus,updatedata);
    }
    updateRemark(updateRemark:any,updatedata:any){
      console.log("The val "+ updateRemark,updatedata);
        return this.httpclient.put(this.url+'/'+updateRemark,updatedata);

    }
}
