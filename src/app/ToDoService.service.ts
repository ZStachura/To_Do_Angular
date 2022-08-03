import { Injectable } from '@angular/core';

export interface Kanban{
  name:String
  done:boolean
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  list: Kanban[]=[]

  createTask(name:String){
    let done=false
    let id=this.list.length+1
    this.list.unshift({name,done,id})
    console.log(this.list)
  }
constructor() { }

}
