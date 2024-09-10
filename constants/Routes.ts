export const ROUTES = {
    home: {
        name: 'home',
        path: '/',
    },
    topics: {
        name: 'topics',
        path: '/groups/:groupId/topics',
        alternativePath: 'choose-topic',
    },
    topicDetail: {
        name: 'topicDetail',
        path: '/topics/:id',
        alternativePath: 'topicDetail',
    },
    test: {
        name: 'test',
        path: '/test',
    },
    completedTopic: {
        name: 'completedTopic',
        path: '/completed-topic',
    },
};
