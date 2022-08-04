import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from '../Kanban';
import { ToDoServiceService } from '../ToDoService.service';

@Component({
  selector: 'app-TodoItem',
  templateUrl: './TodoItem.component.html',
  styleUrls: ['./TodoItem.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  item!:Kanban;
  
  changeDone(id:number){
    this.list.changeDone(id)
   }  

  delete(id:number){
    this.list.deleteElement(id)
  }
  
   constructor(public list: ToDoServiceService) { }

  ngOnInit() {
  }

}
