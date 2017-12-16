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
      //if currindex = tasklist index, remove info from the tasks
      if(this.task.index == message.data.listIndex) {
        this.task.tasks.splice(message.data.index)
      } else if(this.task.index == message.data.listIndex -1 && message.text ==="prev") {
        this.task.tasks.push(message.data.info)
      }
      else if(this.task.index == message.data.listIndex +1 && message.text ==="next") {
        this.task.tasks.push(message.data.info)
      }
      //if tasklist index = currindex + 1 and event is next, add it
      //if tasklis index = curr index -1 and event is prev, add
      console.log(message.data);
    }) 
    }

    /*
    server side rendering, pwa, async handling (observables and stream), redux saga,
    functional reactive, graphql, performance amd bug tracking, cross browser,
    internals of frameworks, transpilers, websockets
    */

  ngOnInit() {
  }

  public addCard() {
    let result = window.prompt("please enter info");
    this.task.tasks.push(result);
    console.log(this.task);
  }
}
