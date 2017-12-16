import {MessageService} from "./message.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

describe("Message Service", () => {
	let messageService: MessageService;
	beforeEach(() => {
		messageService = new MessageService();
	});

	it("getMessage should return observable", () => {
		const subscription = messageService.getMessage();
		expect(subscription instanceof Observable).toEqual(true);
	});
	it("sendMessage should send a message", () => {
		const subscription = messageService.getMessage().subscribe(
			(message) => {
				expect(message.text).toEqual("Test message");
			}
		);
		messageService.sendMessage("Test message");
	});
	it("clearMessage should send empty message", () => {
		const subscription = messageService.getMessage().subscribe(
			(message) => {
				expect(message).toBeUndefined();
			}
		);
		messageService.clearMessage();
	});

});