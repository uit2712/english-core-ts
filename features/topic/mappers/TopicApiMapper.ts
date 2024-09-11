import { NumberHelper } from '@/core/helpers/NumberHelper';
import { StringHelper } from '@/core/helpers/StringHelper';
import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import type { TopicApiMapperInterface } from '../interface-adapters/TopicApiMapperInterface';
import { TopicEntity } from '../entities/TopicEntity';

export class TopicApiMapper implements TopicApiMapperInterface {
    mapFromApiToEntity(data: any): TopicEntity | null {
        if (null === data) {
            return null;
        }

        const result = new TopicEntity();
        if (NumberHelper.isPositive(data.id)) {
            result.id = data.id;
        }

        if (StringHelper.isHasValue(data.name)) {
            result.name = data.name;
        }

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
