import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { ToDoServiceService } from './ToDoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To_Do';

  @ViewChild(MatInput) input!: MatInput;
  
  constructor(public list: ToDoServiceService) {}
  add(){
    let newTask=this.input.value;
    this.list.createTask(newTask);
    this.input.value="";
    this.input.focus();
  }
  changeDone(id:number){
   let index=this.list.list.findIndex((obj=>obj.id==id))
   this.list.list[index].done=!this.list.list[index].done
   console.log(this.list.list[index])
  }

}
