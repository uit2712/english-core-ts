import { GroupEntity } from '@/core/features/group/entities/GroupEntity';
import { TopicEntity } from '../../topic/entities/TopicEntity';

export interface StorageQuestionaireRepositoryInterface<T> {
    setTopic(topic?: TopicEntity | null): void;
    setList(list?: T[]): void;
    getList(): T[];
    getTotalVocabulariesTitle(): string;
    getTopicTitle(): string;
    setGroup(group?: GroupEntity | null): void;
    getGroupId(): number;
    getTopicId(): number;
}
