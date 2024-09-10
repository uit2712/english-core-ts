export class NumberHelper {
    public static isValid(value: any) {
        return typeof value === 'number';
    }

    public static isPositive(value: any) {
        return NumberHelper.isValid(value) && value > 0;
    }

    public static isPositiveIncludeZero(value: any) {
        return NumberHelper.isValid(value) && value >= 0;
    }

    public static randomNumberInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
