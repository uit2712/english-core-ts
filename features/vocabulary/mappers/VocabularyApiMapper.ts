import { NumberHelper } from '@/core/helpers/NumberHelper';
import { StringHelper } from '@/core/helpers/StringHelper';
import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import { VocabularyApiMapperInterface } from '../interface-adapters/VocabularyApiMapperInterface';
import { VocabularyEntity } from '../entities/VocabularyEntity';

export class VocabularyApiMapper implements VocabularyApiMapperInterface {
    mapFromApiToEntity(data: any): VocabularyEntity | null {
        if (null === data) {
            return null;
        }

        const result = new VocabularyEntity();
        if (NumberHelper.isPositive(data.id)) {
            result.id = data.id;
        }

        if (StringHelper.isHasValue(data.name)) {
            result.name = data.name;
        }

        if (StringHelper.isHasValue(data.pronunciation)) {
            result.pronunciation = data.pronunciation;
        }

        if (StringHelper.isHasValue(data.meaning)) {
            result.meaning = data.meaning;
        }

        if (StringHelper.isHasValue(data.image)) {
            result.image = data.image;
        }

        if (NumberHelper.isPositive(data.topicId)) {
            result.topicId = data.topicId;
        }

        return result;
    }

    mapFromApiToListEntities(data: any): VocabularyEntity[] {
        const result: VocabularyEntity[] = [];
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
