import { Result } from '@/core/models/Result';
import { TopicEntity } from '../entities/TopicEntity';

export class GetListTopicsResult extends Result<TopicEntity[]> {
    public override data: TopicEntity[] = [];
}
