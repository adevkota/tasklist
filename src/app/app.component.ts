import { Component, OnInit } from '@angular/core';
import { MessageService} from './shared/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tasklist';

  public taskContainer;

  constructor(private messageService: MessageService) { 
   
  }

  public ngOnInit() {
    this.taskContainer = {
      one: {
        title: "one",
        index:0,
        tasks:["one", "two"]
      },
      two: {
        title: "two",

        index:1,
        tasks:["one", "two"]
      },
      three: {
        index:2,
        title: "three",
        tasks:["one", "two"]
      },
      four: {
        index:3,
        title: "four",
        tasks:["one", "two"]
      }
    }
  }
  // public addTask(newTask)  {
  //   this.messageService.sendMessage("newTask", newTask);
  // }
  // public search(text)  {
  //   this.messageService.sendMessage("search", text);
  // }
}
