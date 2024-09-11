import { GroupEntity } from '../entities/GroupEntity';
import { Result } from '@/core/models/Result';

export class GetListGroupsResult extends Result<GroupEntity[]> {
    public override data: GroupEntity[] = [];
}
