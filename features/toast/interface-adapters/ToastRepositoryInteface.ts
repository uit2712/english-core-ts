export interface ToastRepositoryInteface {
    showSuccessMessage(message: string): void;
    showErrorMessage(message: string): void;
    showSuccessMessageAutoClose(message: string, lifespan: number): void;
    showErrorMessageAutoClose(message: string, lifespan: number): void;
}
