import { Questionaire } from '../../../features/questionaire/facades/Questionaire';
import { TopicApi } from '../../../features/topic/facades/TopicApi';

export class GetListVocabulariesPageListTopicDetailUseCase {
    public async invoke(topicId: number) {
        const result = await TopicApi.getListVocabularies(topicId);
        const { success, data, topic } = result;
        if (success) {
            Questionaire.getVocaStorage().setList(data);
            Questionaire.getVocaStorage().setTopic(topic);
        }

        return result;
    }
}
