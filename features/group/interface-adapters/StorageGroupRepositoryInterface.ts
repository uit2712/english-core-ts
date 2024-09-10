import { GroupEntity } from '../entities/GroupEntity';
import { GetGroupResult } from '../models/GetGroupResult';
import { GetListGroupsResult } from '../models/GetListGroupsResult';

export interface StorageGroupRepositoryInterface {
    setList(list: GroupEntity[]): void;
    getAll(): GetListGroupsResult;
    get(id: number): GetGroupResult;
}
