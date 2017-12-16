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
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public moveToNext() {
    this.messageService.sendMessage("next", {index: this.index, listIndex: this.listIndex, info: this.info})
  }
  public moveToPrev() {
    this.messageService.sendMessage("prev", {index: this.index, listIndex: this.listIndex, info: this.info})
  }
}