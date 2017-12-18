import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'title-card',
	templateUrl: './title-card.component.html',
	styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent implements OnInit {
	@Input() title;
	constructor() { }

	ngOnInit() {
	}

}
