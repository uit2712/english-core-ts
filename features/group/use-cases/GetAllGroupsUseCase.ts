import { Group } from '../facades/Group';

export class GetAllGroupsUseCase {
    public async invoke() {
        return await Group.getRepo().getAll();
    }
}
