"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const message_sender_1 = require("./message-sender");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const webhookUrl = getRequiredInput('webhook-url');
            const message = getRequiredInput('message');
            const sender = new message_sender_1.MessageSender(webhookUrl);
            yield sender.send(message);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
function getRequiredInput(key) {
    const input = core.getInput(key);
    if (!input) {
        core.setFailed(`${key} is not valid or is empty`);
    }
    return input;
}
run();
