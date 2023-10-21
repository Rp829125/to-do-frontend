import { Component,  Input,  OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.css']
})
export class PostTaskComponent implements OnInit {

  allTask: any[] = []
  taskName!:any
  

 editData:any 
  
constructor(private task:TaskService){}

ngOnInit(): void {
  this.getTask();
  
  }
 
  

   getTask(){
    
    this.task.getAllTask().subscribe( (res)=>
      {
        
        console.log(res)
        this.allTask = res;
        console.log(this.allTask)
      })
  }

  
  
  async postTask(){
   var  data = {name:this.taskName}
   var result = JSON.stringify(data)
    await this.task.postTask(result).subscribe(res=>{
    // this.allTask.push(res.newTask)
    this.getTask()
   })
    this.taskName = "";
   
   }
    
  deleteTask(id:string){
  
    this.task.deleteTask(id).subscribe( res=>{
    this.getTask();
     })

  }
    
editTask(task:any){
 
  this.getTask();
this.editData = {
  id:task._id,
  name:task.name,
 done:task.done
 
} 
}

reciveResponse(evnet:any)
{
   this.getTask();
}

  }

