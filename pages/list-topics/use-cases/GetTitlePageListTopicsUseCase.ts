import { Group } from '@/core/features/group/facades/Group';
import { NumberHelper } from '@/core/helpers/NumberHelper';

export class GetTitlePageListTopicsUseCase {
    public invoke(groupId: number): string {
        if (NumberHelper.isPositive(groupId) === false) {
            return '';
        }

        const getDataResult = Group.getStorage().get(groupId);
        if (!getDataResult.data || getDataResult.isHasObjectData() === false) {
            return '';
        }

        const { name } = getDataResult.data;
        return `Các chủ đề về ${name}`;
    }
}
