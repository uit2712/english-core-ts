import { StringHelper } from './StringHelper';

export class MessageHelper {
    public static format(message: string, ...args: string[]) {
        if (StringHelper.isHasValue(message) === false) {
            return '';
        }

        return message.replace(/{(\d+)}/g, function (match: string, index: number) {
            return typeof args[index] !== 'undefined' ? args[index] : match;
        });
    }
}
