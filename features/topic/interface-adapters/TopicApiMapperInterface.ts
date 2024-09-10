import { TopicEntity } from '../entities/TopicEntity';

export interface TopicApiMapperInterface {
    mapFromApiToEntity(data: any): TopicEntity | null;
    mapFromApiToListEntities(data: any): TopicEntity[];
}
