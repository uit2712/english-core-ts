import { Result } from '@/core/models/Result';

import { GroupEntity } from '../entities/GroupEntity';

export class GetListGroupsResult extends Result<GroupEntity[]> {
    public override data: GroupEntity[] = [];
}
