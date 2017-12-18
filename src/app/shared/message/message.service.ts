import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
	private subject = new Subject<any>();

	public sendMessage(message: string, data?: any): void {
		this.subject.next({ text: message, data });
	}

	public clearMessage(): void {
		this.subject.next();
	}

	public getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}
