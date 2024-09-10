import { Result } from '@/core/models/Result';
import { VocabularyEntity } from '../entities/VocabularyEntity';

export class GetListVocabulariesResult extends Result<VocabularyEntity[]> {
    public data: VocabularyEntity[] = [];
}
