import { Topic } from '../facades/Topic';

export class GetListVocabulariesByTopicIdUseCase {
    public async invoke(topicId: number) {
        return await Topic.getRepo().getListVocabularies(topicId);
    }
}
