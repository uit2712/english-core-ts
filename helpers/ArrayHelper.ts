import { StringHelper } from './StringHelper';

export class ArrayHelper {
    public static isValid(value: any) {
        return Array.isArray(value);
    }

    public static isHasItems(value: any) {
        return Array.isArray(value) && value.length > 0;
    }

    public static filterValidString(value: any) {
        return Array.isArray(value) && value.filter((item) => StringHelper.isHasValue(item));
    }

    public static shuffle<T>(array: T[]) {
        const result = [...array];
        let currentIndex = result.length;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
        }

        return result;
    }
}
