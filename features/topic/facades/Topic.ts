import { StorageTopicRepository } from '@/framework/features/topic/repositories/StorageTopicRepository';
import type { StorageTopicRepositoryInterface } from '../interface-adapters/StorageTopicRepositoryInterface';
import type { TopicApiMapperInterface } from '../interface-adapters/TopicApiMapperInterface';
import type { TopicRepositoryInterface } from '../interface-adapters/TopicRepositoryInterface';
import { TopicApiMapper } from '../mappers/TopicApiMapper';
import { TopicRepository } from '../repositories/TopicRepository';

export class Topic {
    private static apiMapper: TopicApiMapperInterface;
    private static repo: TopicRepositoryInterface;
    private static storage: StorageTopicRepositoryInterface;

    public static getApiMapper() {
        if (!this.apiMapper) {
            this.apiMapper = new TopicApiMapper();
        }

        return this.apiMapper;
    }

    public static getRepo() {
        if (!this.repo) {
            this.repo = new TopicRepository();
        }

        return this.repo;
    }

    public static getStorage() {
        if (!this.storage) {
            this.storage = new StorageTopicRepository();
        }

        return this.storage;
    }
}
