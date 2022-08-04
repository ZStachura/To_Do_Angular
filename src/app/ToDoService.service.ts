import { Injectable } from '@angular/core';
import { Kanban } from './Kanban';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  list: Kanban[]=[]

  createTask(name:String){
    let done=false;
    let id=this.list.length+1;
    let doneCreated="not done yet";
    this.list.unshift({name,done,id,doneCreated});
    console.log(this.list);
  }
  changeDone(id:number){
    let index=this.list.findIndex((obj=>obj.id==id));
    this.list[index].done=!this.list[index].done;
    let date=new Date().toLocaleString('en-US', { timeZone: 'CET' });
    this.list[index].doneCreated=date
    console.log(this.list[index]);
  }
  deleteElement(id:number){
    let index=this.list.findIndex((obj=>obj.id==id));
    this.list.splice(index,1);
  }

  
constructor() { }

}
