import { VocabularyEntity } from '@/core/features/vocabulary/entities/VocabularyEntity';
import type { StorageQuestionaireRepositoryInterface } from '../interface-adapters/StorageQuestionaireRepositoryInterface';
import { StorageVocabularyQuestionaireRepository } from '@/framework/features/questionaire/repositories/StorageVocabularyQuestionaireRepository';

export class Questionaire {
    private static vocaStorage: StorageQuestionaireRepositoryInterface<VocabularyEntity>;

    public static getVocaStorage() {
        if (!this.vocaStorage) {
            this.vocaStorage = new StorageVocabularyQuestionaireRepository();
        }

        return this.vocaStorage;
    }
}
