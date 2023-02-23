import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  constructor(private httpclient:HttpClient) { }
  url = 'http://localhost:3000/Milestone';

  getMilestone(){
    return this.httpclient.get(this.url);
  }
  url1= 'http://localhost:3001/MileStone_status';
  getStatus(){
    return this.httpclient.get(this.url1);
  }
  updateStatus(updateStatus:any,updatedata:any){
    console.log("The val "+ updateStatus,updatedata);
      return this.httpclient.put(this.url+'/'+updateStatus,updatedata);
  }
  
}
