export interface RouterRepositoryInteface<T> {
    setRouter(router: T): void;
    navigate(path: string, params?: T | null): void;
    navigateToListTopicsOfGroup(groupId: number): void;
    navigateToTopicDetail(topicId: number): void;
    navigateToCompletedTopic(totalCorrectAnswersText: string, testResultMessage: string): void;
    navigateToTest(): void;
}
