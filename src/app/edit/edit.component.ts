import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,OnChanges
{
  and!:any[]
  @Input()editData!:any
  editForm!:FormGroup
  @Output() eventEmit =new EventEmitter<string>();
  
  
constructor(private http:TaskService){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editData);
  
  this.loadData();
  console.log()
  }

ngOnInit(): void {
  this.initForm();
  // this.initForm();
   this.loadData();
   this.getdata();
  // console.log()
}

initForm()
{
  this.editForm = new FormGroup({
    taskName:new FormControl(),
    taskDone:new FormControl()
    })
}

loadData()
{
  if(this.editData)
  {
    this.editForm.get('taskName')?.setValue(this.editData.name);
    this.editForm.get('taskDone')?.setValue(this.editData.done);
  }
  
}



onSubmit(){
  let id:string = this.editData.id
  let data:Task = {
    name:this.editForm.get('taskName')?.value,
    done:this.editForm.get('taskDone')?.value,
  }

  
  let stringifyData = JSON.stringify(data)
  console.log(stringifyData)
  this.http.updateTask(id,data).subscribe((res)=>{
    this.eventEmit.emit("ok");
  })
  this.editData = null
  
 
}
getdata(){
  this.http.getAllTask().subscribe(rs=>{
this.and=rs;
  })
}
}
