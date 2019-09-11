import { MessageSender } from '../src/message-sender';

describe('sendMessage', () => {
	it('Should send the message to the webhook', async () => {
		const webhookUrl = 'http://webhook.url';
		const message = 'Hello There. Welcome';

		const sender = new MessageSender(webhookUrl);
		await sender.send(message);
	});
});
