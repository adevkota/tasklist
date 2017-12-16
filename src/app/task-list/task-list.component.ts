import { Component, OnInit } from '@angular/core';
import { MessageService } from "../shared/message.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public taskList;
  constructor(private messageService: MessageService) { 
    this.taskList = [];
    this.messageService.getMessage().subscribe(this.addTask.bind(this));    
  }

  ngOnInit() {
  }

  private addTask({text, data}) {
    this.taskList.push(data || `default task ${this.taskList.length + 1}`);
  }
}
