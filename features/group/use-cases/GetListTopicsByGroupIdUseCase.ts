import { Group } from '../facades/Group';

export class GetListTopicsByGroupIdUseCase {
    public async invoke(groupId: number) {
        return await Group.getRepo().getListTopics(groupId);
    }
}
