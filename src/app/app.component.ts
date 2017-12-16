import { Component } from '@angular/core';
import { MessageService} from './shared/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasklist';

  constructor(private messageService: MessageService) { }

  public addTask(newTask)  {
    this.messageService.sendMessage("newTask", newTask);
  }
  public search(text)  {
    this.messageService.sendMessage("search", text);
  }
}
