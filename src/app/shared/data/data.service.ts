import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class DataService {
	private dataSubject = new BehaviorSubject<any>(this.initData);
	constructor() { }

	public getData(): Observable<Object> {
		return this.dataSubject.asObservable().share();
	}

	public setData(tasks): void {
		localStorage.setItem('tasks', tasks);
		this.dataSubject.next(tasks);
	}

	private initData(): any {
		return localStorage.getItem('tasks') || {};
	}
}

