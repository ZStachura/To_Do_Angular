import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { ToDoServiceService } from './ToDoService.service';
import { TodoItemComponent } from './TodoItem/TodoItem.component';
import { TaskfilterPipe } from './taskfilter.pipe';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [				
    AppComponent,
    TodoItemComponent,
      TaskfilterPipe,
      TooltipDirective
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    MatCheckboxModule
  ],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
