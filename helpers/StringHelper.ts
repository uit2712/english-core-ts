import { NumberHelper } from './NumberHelper';

export class StringHelper {
    public static isHasValue(value: any) {
        return value !== null && value !== undefined && typeof value === 'string' && value.trim().length > 0;
    }

    public static random(length = 20) {
        if (NumberHelper.isPositive(length) === false) {
            return '';
        }

        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }

        return result;
    }
}
