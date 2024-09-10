import { GetListVocabulariesByTopicIdUseCase } from '../use-cases/GetListVocabulariesByTopicIdUseCase';

export class TopicApi {
    private static getListVocabulariesByTopicIdUseCase: GetListVocabulariesByTopicIdUseCase;

    public static getListVocabularies(id: number) {
        if (!this.getListVocabulariesByTopicIdUseCase) {
            this.getListVocabulariesByTopicIdUseCase = new GetListVocabulariesByTopicIdUseCase();
        }

        return this.getListVocabulariesByTopicIdUseCase.invoke(id);
    }
}
