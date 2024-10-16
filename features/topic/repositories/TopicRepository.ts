import axios from 'axios';

import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { Vocabulary } from '@/core/features/vocabulary/facades/Vocabulary';
import {
    GetListVocabulariesByTopicIdResult
} from '@/core/features/vocabulary/models/GetListVocabulariesByTopicIdResult';
import { MessageHelper } from '@/core/helpers/MessageHelper';
import { BASE_API_URL } from '@/framework/constants/Api';

import { Topic } from '../facades/Topic';
import { GetListTopicsResult } from '../models/GetListTopicsResult';
import { GetTopicResult } from '../models/GetTopicResult';

import type { TopicRepositoryInterface } from '../interface-adapters/TopicRepositoryInterface';
export class TopicRepository implements TopicRepositoryInterface {
    private API_URL = BASE_API_URL + '/topics';

    async getAll(): Promise<GetListTopicsResult> {
        const result = new GetListTopicsResult();

        try {
            const response = await axios.get(this.API_URL);
            const { success, data, message } = response.data;

            result.success = success ?? false;
            result.data = Topic.getApiMapper().mapFromApiToListEntities(data);
            result.message = message ?? '';
            return result;
        } catch (ex: any) {
            result.message = ex.message;
            return result;
        }
    }
    async get(id: number): Promise<GetTopicResult> {
        const result = new GetTopicResult();
        if (id <= 0) {
            result.message = MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'id');
            return result;
        }

        try {
            const response = await axios.get(this.API_URL + `/${id}`);
            const { success, data, message } = response.data;

            result.success = success ?? false;
            result.data = Topic.getApiMapper().mapFromApiToEntity(data);
            result.message = message ?? '';
            return result;
        } catch (ex: any) {
            result.message = ex.message;
            return result;
        }
    }

    async getListVocabularies(id: number): Promise<GetListVocabulariesByTopicIdResult> {
        const result = new GetListVocabulariesByTopicIdResult();
        if (id <= 0) {
            result.message = MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'id');
            return result;
        }

        try {
            const response = await axios.get(this.API_URL + `/${id}/vocabularies`);
            const { success, data, message, topic } = response.data;

            result.success = success ?? false;
            result.data = Vocabulary.getApiMapper().mapFromApiToListEntities(data);
            result.message = message ?? '';
            result.topic = Topic.getApiMapper().mapFromApiToEntity(topic);
            return result;
        } catch (ex: any) {
            result.message = ex.message;
            return result;
        }
    }
}
