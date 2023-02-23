import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpclient:HttpClient) { }
  url = 'http://localhost:3000/Task';
  getTask(){
    return this.httpclient.get(this.url);
  }
  url1 = 'http://localhost:3001/Task_Status'
  
  gettaskStatus(){
    return this.httpclient.get(this.url1)
  }
}
