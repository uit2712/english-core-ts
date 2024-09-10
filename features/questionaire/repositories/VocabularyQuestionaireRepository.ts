import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import { VocabularyEntity } from '../../vocabulary/entities/VocabularyEntity';
import { NumberHelper } from '@/core/helpers/NumberHelper';
import { QuestionaireRepositoryInterface } from '@/core/features/questionaire/interface-adapters/QuestionaireRepositoryInterface';
import { QuestionaireEntity } from '@/core/features/questionaire/entities/QuestionaireEntity';

export class VocabularyQuestionaireRepository implements QuestionaireRepositoryInterface<VocabularyEntity> {
    private listQuestions: QuestionaireEntity<VocabularyEntity>[] = [];
    private totalAnswers: number = 4;
    private currentIndex: number = 0;
    private isInitialize: boolean = false;
    private totalCorrectAnswers: number = 0;

    public constructor(totalAnswers: number = 4) {
        if (totalAnswers >= 2) {
            this.totalAnswers = totalAnswers;
        }
    }

    initializeListQuestions(listQuestions: VocabularyEntity[]): QuestionaireRepositoryInterface<VocabularyEntity> {
        if (listQuestions.length === 0 || this.isInitialize) {
            return this;
        }

        const shuffleQuestions = ArrayHelper.shuffle(listQuestions);
        while (shuffleQuestions.length > 0) {
            const newQuestionaire = new QuestionaireEntity<VocabularyEntity>();
            newQuestionaire.rightAnswer = shuffleQuestions.shift();
            let remainingQuestions = listQuestions.filter((item) => item.id !== newQuestionaire.rightAnswer?.id);

            for (let index = 0; index < this.totalAnswers - 1; index++) {
                const randomAnswerIndex = NumberHelper.randomNumberInRange(0, remainingQuestions.length - 1);
                const randomAnswer = remainingQuestions[randomAnswerIndex];
                if (randomAnswer) {
                    newQuestionaire.listAnswers.push(randomAnswer);
                }
                remainingQuestions = remainingQuestions.filter((item) => item.id !== randomAnswer.id);
            }
            if (newQuestionaire.isValid() && newQuestionaire.rightAnswer) {
                newQuestionaire.listAnswers.push(newQuestionaire.rightAnswer);
                newQuestionaire.listAnswers = ArrayHelper.shuffle(newQuestionaire.listAnswers);
                this.listQuestions.push(newQuestionaire);
            }
        }

        this.isInitialize = true;
        return this;
    }

    getCurrentQuestion(): QuestionaireEntity<VocabularyEntity> | undefined {
        if (this.isCompleted()) {
            return undefined;
        }

        return this.listQuestions[this.currentIndex];
    }

    nextQuestion(): void {
        this.currentIndex++;
    }

    isCompleted(): boolean {
        return this.isInitialize && this.currentIndex >= this.listQuestions.length;
    }

    currentQuestionNumber(): number {
        return this.currentIndex + 1;
    }

    getProgressInText(): string {
        return `Question ${this.currentQuestionNumber()}/${this.listQuestions.length}:`;
    }

    getProgressInPercent(): number {
        if (ArrayHelper.isHasItems(this.listQuestions)) {
            return Math.ceil((this.currentIndex * 100) / this.listQuestions.length);
        }

        return 0;
    }

    increaseTotalCorrectAnswers(): void {
        this.totalCorrectAnswers++;
    }

    getTotalCorrectAnswers(): number {
        return this.totalCorrectAnswers;
    }

    getTotalCorrectAnswersText(): string {
        return `Bạn đã trả lời đúng ${this.totalCorrectAnswers}/${this.listQuestions.length} câu hỏi.`;
    }

    getTestResultMessage(): string {
        const correctPercent = this.getProgressInPercent();

        if (correctPercent < 50) {
            return 'Kết quả hơi kém, bạn cố gắng làm tốt hơn nha';
        }

        if (correctPercent < 80) {
            return 'Bạn khá lắm, cố gắng hơn nữa để đạt kết quả tốt nha';
        }

        return 'Xuất sắc!';
    }
}
