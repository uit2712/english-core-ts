import { GetAllGroupsUseCase } from '../use-cases/GetAllGroupsUseCase';
import { GetListTopicsByGroupIdUseCase } from '../use-cases/GetListTopicsByGroupIdUseCase';

export class GroupApi {
    private static getAllGroupsUseCase: GetAllGroupsUseCase;
    private static getListTopicsByGroupIdUseCase: GetListTopicsByGroupIdUseCase;

    public static getAll() {
        if (!this.getAllGroupsUseCase) {
            this.getAllGroupsUseCase = new GetAllGroupsUseCase();
        }

        return this.getAllGroupsUseCase.invoke();
    }

    public static getListTopics(id: number) {
        if (!this.getListTopicsByGroupIdUseCase) {
            this.getListTopicsByGroupIdUseCase = new GetListTopicsByGroupIdUseCase();
        }

        return this.getListTopicsByGroupIdUseCase.invoke(id);
    }
}
