import { Group } from '@/core/features/group/facades/Group';
import { GroupApi } from '@/core/features/group/facades/GroupApi';

export class GetListGroupsPageListGroupsUseCase {
    public async invoke() {
        const result = await GroupApi.getAll();
        const { success, data } = result;
        if (success) {
            Group.getStorage().setList(data);
        }

        return result;
    }
}
