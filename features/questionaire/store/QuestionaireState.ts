import { GroupEntity } from '../../group/entities/GroupEntity';
import { TopicEntity } from '../../topic/entities/TopicEntity';
import { VocabularyEntity } from '../../vocabulary/entities/VocabularyEntity';

export interface QuestionaireState {
    listSelectedVocabularies: VocabularyEntity[];
    selectedTopic: TopicEntity | null;
    selectedGroup: GroupEntity | null;
}

export const initialQuestionaireState: QuestionaireState = {
    listSelectedVocabularies: [],
    selectedTopic: null,
    selectedGroup: null,
};
