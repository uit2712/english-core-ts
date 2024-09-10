import { ArrayHelper } from '@/core/helpers/ArrayHelper';

export class QuestionaireEntity<T> {
    public listAnswers: T[] = [];
    public rightAnswer?: T;

    public isValid(): boolean {
        return ArrayHelper.isHasItems(this.listAnswers) && undefined !== this.rightAnswer;
    }
}
