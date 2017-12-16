import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from "../shared/message/message.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public searchText;
  @Input() task;
  constructor(private messageService: MessageService) {
    this.messageService.getMessage().subscribe((message) => {
      if(this.task.index == message.data.listIndex) {
        //if currindex = tasklist index, remove info from the tasks
        this.task.tasks.splice(message.data.index, 1)
      } else if(this.task.index == message.data.listIndex -1 && message.text ==="prev") {
        //if tasklist index = currindex + 1 and event is next, add it
        this.task.tasks.push(message.data.info)
      }
      else if(this.task.index == message.data.listIndex +1 && message.text ==="next") {
        //if tasklis index = curr index -1 and event is prev, add
        this.task.tasks.push(message.data.info)
      }
      console.log(message.data);
    }) 
    }

  ngOnInit() {
  }

  public addCard() {
    let result = window.prompt("please enter info");
    this.task.tasks.push(result);
    console.log(this.task);
  }
}
