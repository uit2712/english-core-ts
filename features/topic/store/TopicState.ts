import { TopicEntity } from '../entities/TopicEntity';

export interface TopicState {
    list: TopicEntity[];
}

export const initialTopicState: TopicState = {
    list: [],
};
