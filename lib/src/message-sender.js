"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request-promise"));
class MessageSender {
    constructor(webhookUrl) {
        this.webhookUrl = webhookUrl;
    }
    send(message) {
        const options = {
            method: 'POST',
            uri: this.webhookUrl,
            body: { text: message },
            json: true
        };
        return request.post(options);
    }
}
exports.MessageSender = MessageSender;
