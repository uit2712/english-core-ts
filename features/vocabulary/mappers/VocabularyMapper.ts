import { VocabularyEntity } from '../entities/VocabularyEntity';
import { AnswerViewModel } from '../view-models/AnswerViewModel';

import type { VocabularyMapperInterface } from '../interface-adapters/VocabularyMapperInterface';
export class VocabularyMapper implements VocabularyMapperInterface {
    mapFromEntityToAnswerNameViewModel(data?: VocabularyEntity | null): AnswerViewModel | null {
        if (!data) {
            return null;
        }

        const { id, name, meaning } = data;

        const result = new AnswerViewModel();
        result.id = id;
        result.englishText = name;
        result.elementId = `element-${id}`;
        result.text = name;
        result.fullInfoHtml = `${meaning}`;

        return result;
    }

    mapFromListEntitiesToListAnswerNameViewModels(data: VocabularyEntity[]): AnswerViewModel[] {
        const result: AnswerViewModel[] = [];
        for (const item of data) {
            const newItem = this.mapFromEntityToAnswerNameViewModel(item);
            if (newItem) {
                result.push(newItem);
            }
        }

        return result;
    }

    mapFromEntityToAnswerMeaningViewModel(data?: VocabularyEntity | null): AnswerViewModel | null {
        if (!data) {
            return null;
        }

        const { id, name, meaning } = data;

        const result = new AnswerViewModel();
        result.id = id;
        result.englishText = name;
        result.elementId = `element-${id}`;
        result.text = meaning;
        result.fullInfoHtml = `${name}`;

        return result;
    }

    mapFromListEntitiesToListAnswerMeaningViewModels(data: VocabularyEntity[]): AnswerViewModel[] {
        const result: AnswerViewModel[] = [];
        for (const item of data) {
            const newItem = this.mapFromEntityToAnswerMeaningViewModel(item);
            if (newItem) {
                result.push(newItem);
            }
        }

        return result;
    }
}
