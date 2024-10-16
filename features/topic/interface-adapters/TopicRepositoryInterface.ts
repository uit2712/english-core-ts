import {
    GetListVocabulariesByTopicIdResult
} from '@/core/features/vocabulary/models/GetListVocabulariesByTopicIdResult';

import { GetListTopicsResult } from '../models/GetListTopicsResult';
import { GetTopicResult } from '../models/GetTopicResult';

export interface TopicRepositoryInterface {
    getAll(): Promise<GetListTopicsResult>;
    get(id: number): Promise<GetTopicResult>;
    getListVocabularies(id: number): Promise<GetListVocabulariesByTopicIdResult>;
}
