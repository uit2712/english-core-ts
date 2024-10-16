import {
    GetListTopicsPageListTopicsUseCase
} from '../use-cases/GetListTopicsPageListTopicsUseCase';
import { GetTitlePageListTopicsUseCase } from '../use-cases/GetTitlePageListTopicsUseCase';
import { SelectTopicPageListTopicsUseCase } from '../use-cases/SelectTopicPageListTopicsUseCase';

export class PageListTopicsUI {
    private static selectTopicPageListTopicsUseCase: SelectTopicPageListTopicsUseCase;
    private static getListTopicsPageListTopicsUseCase: GetListTopicsPageListTopicsUseCase;
    private static getTitlePageListTopicsUseCase: GetTitlePageListTopicsUseCase;

    public static selectTopic(id: number) {
        if (!this.selectTopicPageListTopicsUseCase) {
            this.selectTopicPageListTopicsUseCase = new SelectTopicPageListTopicsUseCase();
        }

        return this.selectTopicPageListTopicsUseCase.invoke(id);
    }

    public static getByGroupId(groupId: number) {
        if (!this.getListTopicsPageListTopicsUseCase) {
            this.getListTopicsPageListTopicsUseCase = new GetListTopicsPageListTopicsUseCase();
        }

        return this.getListTopicsPageListTopicsUseCase.invoke(groupId);
    }

    public static getTitle(groupId: number) {
        if (!this.getTitlePageListTopicsUseCase) {
            this.getTitlePageListTopicsUseCase = new GetTitlePageListTopicsUseCase();
        }

        return this.getTitlePageListTopicsUseCase.invoke(groupId);
    }
}
