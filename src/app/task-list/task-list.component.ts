import { Component, OnInit } from '@angular/core';
import { MessageService } from "../shared/message/message.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public taskList;
  public searchText;
  constructor(private messageService: MessageService) { 
    this.taskList = [];
    this.messageService.getMessage().subscribe(this.handleEvent.bind(this));    
  }

  ngOnInit() {
  }

  private handleEvent({text, data}) {
    if(text === "search" ) {
      this.searchText = data;
    } else if (text === "newTask") {
      this.addTask(data);
    }
  }
  private addTask(task) {
    this.taskList = this.taskList.concat([task || `default task ${this.taskList.length + 1}`]);
  }
}
