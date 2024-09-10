import { GetListTopicsResult } from '../models/GetListTopicsResult';
import { TopicEntity } from '../entities/TopicEntity';
import { GetTopicResult } from '../models/GetTopicResult';

export interface StorageTopicRepositoryInterface {
    setList(list: TopicEntity[]): void;
    getAll(): GetListTopicsResult;
    get(id: number): GetTopicResult;
}
