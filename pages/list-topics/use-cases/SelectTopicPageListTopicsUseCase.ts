import { NumberHelper } from '@/core/helpers/NumberHelper';
import { Navigator } from '@/core/features/navigator/facades/Navigator';
import { Questionaire } from '../../../features/questionaire/facades/Questionaire';
import { Topic } from '../../../features/topic/facades/Topic';

export class SelectTopicPageListTopicsUseCase {
    public invoke(id: number) {
        if (NumberHelper.isPositive(id) === false) {
            return;
        }

        const getDataResult = Topic.getStorage().get(id);
        if (getDataResult.isHasObjectData() === false) {
            return;
        }

        Questionaire.getVocaStorage().setTopic(getDataResult.data);
        Navigator.getRouter().navigateToTopicDetail(id);
    }
}
