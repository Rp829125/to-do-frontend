import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

     url = 'http://localhost:300/api/v1/task/'
      headers = { 'content-type': 'application/json'}

  getAllTask():Observable<any>{
     return this.http.get<any>(this.url)
  }

  postTask(task:any):Observable<any>{
    return this.http.post(this.url,task,{'headers':this.headers})
    
  }

  deleteTask(id:string):Observable<any>{
  return this.http.delete(this.url+id)
  }

  updateTask(id:string, data:Task):Observable<any>{
    console.log("there is service log------" +  data)
    return this.http.patch(this.url+id,data,{'headers':this.headers})
  }

}
