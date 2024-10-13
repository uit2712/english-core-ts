import { GetListVocabulariesPageListTopicDetailUseCase } from '../use-cases/GetListVocabulariesPageListTopicDetailUseCase';

export class PageTopicDetailUI {
    private static getListVocabulariesPageListTopicDetailUseCase: GetListVocabulariesPageListTopicDetailUseCase;

    public static getListVocabularies(id: number) {
        if (!this.getListVocabulariesPageListTopicDetailUseCase) {
            this.getListVocabulariesPageListTopicDetailUseCase = new GetListVocabulariesPageListTopicDetailUseCase();
        }

        return this.getListVocabulariesPageListTopicDetailUseCase.invoke(id);
    }
}
