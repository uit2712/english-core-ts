import { GetListTopicsResult } from '../../topic/models/GetListTopicsResult';
import { GetGroupResult } from '../models/GetGroupResult';
import { GetListGroupsResult } from '../models/GetListGroupsResult';

export interface GroupRepositoryInterface {
    getAll(): Promise<GetListGroupsResult>;
    get(id: number): Promise<GetGroupResult>;
    getListTopics(id: number): Promise<GetListTopicsResult>;
}
