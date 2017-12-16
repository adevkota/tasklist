import { Component } from '@angular/core';
import { MessageService} from './shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private messageService: MessageService) { }

  public addTask(newTask)  {
    this.messageService.sendMessage("newTask", newTask);
  }
}
