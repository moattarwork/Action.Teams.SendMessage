import * as core from '@actions/core';
import { MessageSender } from './message-sender';

async function run() {
	try {
		const webhookUrl = getRequiredInput('webhook-url');
		const message = getRequiredInput('message');

		const sender = new MessageSender(webhookUrl);
		await sender.send(message);
	} catch (error) {
		core.setFailed(error.message);
	}
}

function getRequiredInput(key: string): string {
	const input = core.getInput(key);
	if (!input) {
		core.setFailed(`${key} is not valid or is empty`);
	}
	return input;
}

run();
