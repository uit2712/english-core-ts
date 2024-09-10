import { VocabularyEntity } from '../entities/VocabularyEntity';

export interface VocabularyApiMapperInterface {
    mapFromApiToEntity(data: any): VocabularyEntity | null;
    mapFromApiToListEntities(data: any): VocabularyEntity[];
}
