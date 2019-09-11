import { MessageSender } from '../src/message-sender';

describe('sendMessage', () => {
	it('Should send the message to the webhook', async () => {
		const webhookUrl = 'http://webhook.url';
		// 'https://outlook.office.com/webhook/66b44b2b-0915-48f1-a57f-54e832f96c61@31d4ce72-dfb2-4be8-b876-3278f8641754/IncomingWebhook/c55fcb089e394e54881cb0a62a7a2cb2/44a9a258-9ff2-4690-b260-aa79ba2b368b';
		const message = 'Hello There. Welcome';

		// jest.mock('request-promise');

		const sender = new MessageSender(webhookUrl);
		await sender.send(message);
	});
});
