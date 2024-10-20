import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import { NumberHelper } from '@/core/helpers/NumberHelper';
import { StringHelper } from '@/core/helpers/StringHelper';

import { TopicEntity } from '../entities/TopicEntity';

import type { TopicApiMapperInterface } from '../interface-adapters/TopicApiMapperInterface';
export class TopicApiMapper implements TopicApiMapperInterface {
    mapFromApiToEntity(data: any): TopicEntity | null {
        if (null === data) {
            return null;
        }

        const result = new TopicEntity();
        if (NumberHelper.isPositive(data.id) === false || StringHelper.isHasValue(data.name) === false) {
            return null;
        }

        result.id = data.id;
        result.name = data.name;

        if (NumberHelper.isPositive(data.groupId)) {
            result.groupId = data.groupId;
        }

        return result;
    }

    mapFromApiToListEntities(data: any): TopicEntity[] {
        const result: TopicEntity[] = [];
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
