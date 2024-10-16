import { GetListTopicsResult } from '../../topic/models/GetListTopicsResult';
import { GetListGroupsResult } from '../models/GetListGroupsResult';

export interface GroupRepositoryInterface {
    getAll(): Promise<GetListGroupsResult>;
    getListTopics(id: number): Promise<GetListTopicsResult>;
}
