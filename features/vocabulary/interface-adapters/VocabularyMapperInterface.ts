import { VocabularyEntity } from '../entities/VocabularyEntity';
import { AnswerViewModel } from '../view-models/AnswerViewModel';

export interface VocabularyMapperInterface {
    mapFromEntityToAnswerNameViewModel(data?: VocabularyEntity | null): AnswerViewModel | null;
    mapFromListEntitiesToListAnswerNameViewModels(data: VocabularyEntity[]): AnswerViewModel[];
    mapFromEntityToAnswerMeaningViewModel(data?: VocabularyEntity | null): AnswerViewModel | null;
    mapFromListEntitiesToListAnswerMeaningViewModels(data: VocabularyEntity[]): AnswerViewModel[];
}
