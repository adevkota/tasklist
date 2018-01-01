import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from '../shared/message/message.service';

@Component({
	selector: 'info-card',
	templateUrl: './info-card.component.html',
	styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

	@Input() info;
	@Input() listIndex;
	@Input() index;
	@Input() isLast;
	constructor(private messageService: MessageService) { }

	ngOnInit() {
	}

	public moveToNext() {
		if(this.listIndex === 3){ return;}
		this.messageService.sendMessage('next', {index: this.index, listIndex: this.listIndex, info: this.info});
	}
	public moveToPrev() {
		if(this.listIndex === 0) { return; }
		this.messageService.sendMessage('prev', {index: this.index, listIndex: this.listIndex, info: this.info});
	}
	
	public moveDown() {
		//TODO: return if last item
		this.messageService.sendMessage('moveDown', {index: this.index, listIndex: this.listIndex, info: this.info});
	}
	public moveUp() {
		if(this.index === 0) { return; }
		this.messageService.sendMessage('moveUp', {index: this.index, listIndex: this.listIndex, info: this.info});
	}
	public deleteCard() {
		this.messageService.sendMessage('deleteTask', {index: this.index, listIndex: this.listIndex});
	}

}
