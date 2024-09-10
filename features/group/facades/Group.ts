import { GroupApiMapperInterface } from '../interface-adapters/GroupApiMapperInterface';
import { GroupRepositoryInterface } from '../interface-adapters/GroupRepositoryInterface';
import { StorageGroupRepositoryInterface } from '../interface-adapters/StorageGroupRepositoryInterface';
import { GroupApiMapper } from '../mappers/GroupApiMapper';
import { StorageGroupRepository } from '@/framework/features/group/repositories/StorageGroupRepository';
import { GroupRepository } from '../repositories/GroupRepository';

export class Group {
    private static apiMapper: GroupApiMapperInterface;
    private static repo: GroupRepositoryInterface;
    private static storage: StorageGroupRepositoryInterface;

    public static getApiMapper() {
        if (!this.apiMapper) {
            this.apiMapper = new GroupApiMapper();
        }

        return this.apiMapper;
    }

    public static getRepo() {
        if (!this.repo) {
            this.repo = new GroupRepository();
        }

        return this.repo;
    }

    public static getStorage() {
        if (!this.storage) {
            this.storage = new StorageGroupRepository();
        }

        return this.storage;
    }
}
