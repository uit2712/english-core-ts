import { ToastRepository } from '@/framework/features/toast/repositories/ToastRepository';

import type { ToastRepositoryInteface } from '../interface-adapters/ToastRepositoryInteface';

export class Toast {
    private static toast: ToastRepositoryInteface;

    private static getToast() {
        if (!this.toast) {
            this.toast = new ToastRepository();
        }

        return this.toast;
    }

    public static showSuccessMessage(message: string): void {
        this.getToast().showSuccessMessage(message);
    }

    public static showSuccessMessageAutoClose(message: string, lifespan: number): void {
        this.getToast().showSuccessMessageAutoClose(message, lifespan);
    }

    public static showErrorMessage(message: string): void {
        this.getToast().showErrorMessage(message);
    }

    public static showErrorMessageAutoClose(message: string, lifespan: number): void {
        this.getToast().showErrorMessageAutoClose(message, lifespan);
    }
}
