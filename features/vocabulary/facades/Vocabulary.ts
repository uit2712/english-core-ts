import type { VocabularyApiMapperInterface } from '../interface-adapters/VocabularyApiMapperInterface';
import type { VocabularyMapperInterface } from '../interface-adapters/VocabularyMapperInterface';
import { VocabularyApiMapper } from '../mappers/VocabularyApiMapper';
import { VocabularyMapper } from '../mappers/VocabularyMapper';

export class Vocabulary {
    private static apiMapper: VocabularyApiMapperInterface;
    private static mapper: VocabularyMapperInterface;

    public static getApiMapper() {
        if (!this.apiMapper) {
            this.apiMapper = new VocabularyApiMapper();
        }

        return this.apiMapper;
    }

    public static getMapper() {
        if (!this.mapper) {
            this.mapper = new VocabularyMapper();
        }

        return this.mapper;
    }
}
