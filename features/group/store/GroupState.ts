import { GroupEntity } from '../entities/GroupEntity';

export interface GroupState {
    list: GroupEntity[];
}

export const initialGroupState: GroupState = {
    list: [],
};
