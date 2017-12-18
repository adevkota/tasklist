import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../shared/message/message.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

	public searchText;
	@Input() task;
	constructor(private messageService: MessageService) {

		}

	ngOnInit() {
	}

	public addCard() {
		const result = window.prompt('please enter info');
		this.task.tasks.push(result);
	}
}
