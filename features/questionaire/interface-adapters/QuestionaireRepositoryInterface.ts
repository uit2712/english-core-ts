import { QuestionaireEntity } from '../entities/QuestionaireEntity';

export interface QuestionaireRepositoryInterface<T> {
    initializeListQuestions(listQuestions: T[]): QuestionaireRepositoryInterface<T>;
    getCurrentQuestion(): QuestionaireEntity<T> | undefined;
    nextQuestion(): void;
    isCompleted(): boolean;
    currentQuestionNumber(): number;
    getProgressInText(): string;
    getProgressInPercent(): number;
    increaseTotalCorrectAnswers(): void;
    getTotalCorrectAnswers(): number;
    getTotalCorrectAnswersText(): string;
    getTestResultMessage(): string;
}
