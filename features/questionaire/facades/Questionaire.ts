import { VocabularyEntity } from '@/core/features/vocabulary/entities/VocabularyEntity';
import {
    StorageVocabularyQuestionaireRepository
} from '@/framework/features/questionaire/repositories/StorageVocabularyQuestionaireRepository';

import type { StorageQuestionaireRepositoryInterface } from '../interface-adapters/StorageQuestionaireRepositoryInterface';
export class Questionaire {
    private static vocaStorage: StorageQuestionaireRepositoryInterface<VocabularyEntity>;

    public static getVocaStorage() {
        if (!this.vocaStorage) {
            this.vocaStorage = new StorageVocabularyQuestionaireRepository();
        }

        return this.vocaStorage;
    }
}
