import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { MessageService } from './shared/message/message.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { SearchPipe } from './shared/search/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
