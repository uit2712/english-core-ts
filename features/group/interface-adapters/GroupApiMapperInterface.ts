import { GroupEntity } from '../entities/GroupEntity';

export interface GroupApiMapperInterface {
    mapFromApiToEntity(data: any): GroupEntity | null;
    mapFromApiToListEntities(data: any): GroupEntity[];
}
