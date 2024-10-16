import { Group } from '@/core/features/group/facades/Group';
import { Navigator } from '@/core/features/navigator/facades/Navigator';
import { Questionaire } from '@/core/features/questionaire/facades/Questionaire';
import { NumberHelper } from '@/core/helpers/NumberHelper';

export class SelectGroupPageListGroupsUseCase {
    public invoke(id: number) {
        if (NumberHelper.isPositive(id) === false) {
            return;
        }

        const getGroupResult = Group.getStorage().get(id);
        if (getGroupResult.isHasObjectData() === false) {
            return;
        }

        Questionaire.getVocaStorage().setGroup(getGroupResult.data);
        Navigator.getRouter().navigateToListTopicsOfGroup(id);
    }
}
