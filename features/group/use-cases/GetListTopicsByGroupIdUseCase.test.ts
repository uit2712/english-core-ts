import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { MessageHelper } from '@/core/helpers/MessageHelper';

import { GetListTopicsResult } from '../../topic/models/GetListTopicsResult';
import { GroupApi } from '../facades/GroupApi';

const axios = require('axios');

interface DatasetItem {
    id: any;
    expectedResult: Partial<GetListTopicsResult>;
    apiResult?: Partial<GetListTopicsResult>;
}

describe('GetListTopicsByGroupIdUseCase', () => {
    let dataset: DatasetItem[] = [];

    function testInvalidId({ id, expectedResult }: DatasetItem, index: number) {
        it(`invalid id with data set #${index}`, async () => {
            axios.get.mockReturnValue({
                data: {
                    success: false,
                    data: [],
                },
            });

            const actualResult = await GroupApi.getListTopics(id);
            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.data).toEqual(expectedResult.data);
        });
    }

    dataset = [
        {
            id: 0,
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'id'),
                data: [],
            },
        },
        {
            id: 'fsdfsdfd',
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'id'),
                data: [],
            },
        },
    ];
    for (let index = 0; index < dataset.length; index++) {
        testInvalidId(dataset[index], index);
    }
});
