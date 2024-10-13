import { GroupApi } from '@/core/features/group/facades/GroupApi';
import { Topic } from '../../../features/topic/facades/Topic';

export class GetListTopicsPageListTopicsUseCase {
    public async invoke(groupId: number) {
        const result = await GroupApi.getListTopics(groupId);
        const { success, data } = result;
        if (success) {
            Topic.getStorage().setList(data);
        }

        return result;
    }
}
