import { HttpStatusCode } from 'axios';

export class Result<T> {
    public success: boolean = false;
    public message: string = '';
    public responseCode: number = HttpStatusCode.Ok;
    public data: T | null = null;
    public code: string = '';

    public copyExceptData<U>(result: Result<U>) {
        if (null === result) {
            return this;
        }

        this.success = result.success;
        this.message = result.message;
        this.responseCode = result.responseCode;

        return this;
    }

    public isHasObjectData() {
        return this.success && this.data !== null;
    }

    public isHasArrayData() {
        return this.success && Array.isArray(this.data);
    }
}
