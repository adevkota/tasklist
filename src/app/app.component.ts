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
    this.messageService.getMessage().subscribe((message) => {
      this.taskContainer.map((item) => {
            
        if(item.index == message.data.listIndex) {
          //if currindex = tasklist index, remove info from the tasks
            item.tasks.splice(message.data.index, 1)
        } else if(item.index == message.data.listIndex -1 && message.text ==="prev") {
          //if tasklist index = currindex + 1 and event is next, add it
          item.tasks.push(message.data.info)
        }
        else if(item.index == message.data.listIndex +1 && message.text ==="next") {
          //if tasklis index = curr index -1 and event is prev, add
          item.tasks.push(message.data.info)
        }
      })

    }) 
  }

  public ngOnInit() {
    this.taskContainer = [
      {
        title: "one",
        index:0,
        tasks:["one", "two"]
      },
     {
        title: "two",
        index:1,
        tasks:["one", "two"]
      },
       {
        index:2,
        title: "three",
        tasks:["one", "two"]
      },
      {
        index:3,
        title: "four",
        tasks:["one", "two"]
      }
    ]
  }
}
