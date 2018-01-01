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
			if (message.text === 'next' || message.text === 'prev') {
				this.taskContainer.map((item) => {
					if (item.index === message.data.listIndex) {
						// if currindex = tasklist index, remove info from the tasks
						item.tasks.splice(message.data.index, 1);
					} else if (item.index === message.data.listIndex - 1 && message.text === 'prev') {
						// if tasklist index = currindex + 1 and event is next, add it
						item.tasks.push(message.data.info);
					} else if (item.index === message.data.listIndex + 1 && message.text === 'next') {
						// if tasklis index = curr index -1 and event is prev, add
						item.tasks.push(message.data.info);
					}
				});
			} else if(message.text === 'moveUp' || message.text === 'moveDown') {
				this.taskContainer
					.map((item) => {
						if ( item.index === message.data.listIndex) {
							let newPos = message.text === 'moveUp' ? message.data.index - 1 : message.data.index + 1;
							item.tasks[message.data.index] = item.tasks[newPos];
							item.tasks[newPos] = message.data.info;
						}
					})
				
			} else if (message.text === 'addTask') {
				this.taskContainer[message.data.listIndex].tasks.push(message.data.info);
			} else if (message.text === 'deleteTask') {
				this.taskContainer[message.data.listIndex].tasks.splice(message.data.index, 1);
			};


			localStorage.setItem("me.adevkota.taskContainer", JSON.stringify(this.taskContainer));

		});
	}

	public ngOnInit() {
		this.taskContainer = JSON.parse(localStorage.getItem("me.adevkota.taskContainer")) || this.getDefaultTaskContainer();
	}

	public getDefaultTaskContainer(): Array<{}> {
		return [
			{
				title: 'TODO',
				index: 0,
				tasks: ["one", "two"]
			},
			{
				title: 'CODING',
				index: 1,
				tasks: []
			},
			{
				index: 2,
				title: 'TESTING',
				tasks: []
			},
			{
				index: 3,
				title: 'DONE',
				tasks: []
			}
		];
	}

}
