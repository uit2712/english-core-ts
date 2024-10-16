import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import { NumberHelper } from '@/core/helpers/NumberHelper';
import { StringHelper } from '@/core/helpers/StringHelper';

import { GroupEntity } from '../entities/GroupEntity';

import type { GroupApiMapperInterface } from '../interface-adapters/GroupApiMapperInterface';
export class GroupApiMapper implements GroupApiMapperInterface {
    mapFromApiToEntity(data: any): GroupEntity | null {
        if (null === data) {
            return null;
        }

        const result = new GroupEntity();
        if (NumberHelper.isPositive(data.id)) {
            result.id = data.id;
        }

        if (StringHelper.isHasValue(data.name)) {
            result.name = data.name;
        }

        return result;
    }

    mapFromApiToListEntities(data: any): GroupEntity[] {
        const result: GroupEntity[] = [];
        if (ArrayHelper.isHasItems(data) === false) {
            return result;
        }

        for (const item of data) {
            const mappedItem = this.mapFromApiToEntity(item);
            if (mappedItem) {
                result.push(mappedItem);
            }
        }

        return result;
    }
}
