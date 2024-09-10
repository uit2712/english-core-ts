import { QuestionaireEntity } from '../entities/QuestionaireEntity';

export interface QuestionaireRepositoryInterface<T> {
    initializeListQuestions(listQuestions: T[]): QuestionaireRepositoryInterface<T>;
    getCurrentQuestion(): QuestionaireEntity<T> | undefined;
    nextQuestion(): QuestionaireRepositoryInterface<T>;
    isCompleted(): boolean;
    getCurrentQuestionNumber(): number;
    getProgressInText(): string;
    getProgressInPercent(): number;
    increaseTotalCorrectAnswers(): QuestionaireRepositoryInterface<T>;
    getTotalCorrectAnswers(): number;
    getTotalCorrectAnswersText(): string;
    getTestResultMessage(): string;
}
