import { TopicEntity } from '@/core/features/topic/entities/TopicEntity';
import { GetListVocabulariesResult } from './GetListVocabulariesResult';

export class GetListVocabulariesByTopicIdResult extends GetListVocabulariesResult {
    public topic: TopicEntity | null = null;
}
