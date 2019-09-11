import * as request from 'request-promise';

export class MessageSender {
	constructor(private webhookUrl: string) {}

	send(message: string): request.RequestPromise {
		const options = {
			method: 'POST',
			uri: this.webhookUrl,
			body: { text: message },
			json: true
		};
		return request.post(options);
	}
}
