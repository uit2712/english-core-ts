import { TopicEntity } from '../entities/TopicEntity';
import { GetListTopicsResult } from '../models/GetListTopicsResult';
import { GetTopicResult } from '../models/GetTopicResult';

export interface StorageTopicRepositoryInterface {
    setList(list: TopicEntity[]): void;
    getAll(): GetListTopicsResult;
    get(id: number): GetTopicResult;
}
