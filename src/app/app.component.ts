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

}
