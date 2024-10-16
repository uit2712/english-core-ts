import axios from 'axios';

import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { Group } from '@/core/features/group/facades/Group';
import {
    GroupRepositoryInterface
} from '@/core/features/group/interface-adapters/GroupRepositoryInterface';
import { GetGroupResult } from '@/core/features/group/models/GetGroupResult';
import { GetListGroupsResult } from '@/core/features/group/models/GetListGroupsResult';
import { Topic } from '@/core/features/topic/facades/Topic';
import { GetListTopicsResult } from '@/core/features/topic/models/GetListTopicsResult';
import { MessageHelper } from '@/core/helpers/MessageHelper';
import { BASE_API_URL } from '@/framework/constants/Api';

export class GroupRepository implements GroupRepositoryInterface {
    private API_URL = BASE_API_URL + '/groups';

    async getAll(): Promise<GetListGroupsResult> {
        const result = new GetListGroupsResult();

        try {
            const response = await axios.get(this.API_URL, {
                params: {
                    page: 0,
                    perPage: 10,
                },
            });
            const { success, data, message } = response.data;

            result.success = success ?? false;
            result.data = Group.getApiMapper().mapFromApiToListEntities(data);
            result.message = message ?? '';
            return result;
        } catch (ex: any) {
            result.message = ex.message;
            return result;
        }
    }

    async get(id: number): Promise<GetGroupResult> {
        throw new Error('Method not implemented.');
    }

    async getListTopics(id: number): Promise<GetListTopicsResult> {
        const result = new GetListTopicsResult();
        if (id <= 0) {
            result.message = MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'id');
            return result;
        }

        try {
            const response = await axios.get(this.API_URL + `/${id}/topics`);
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
}
