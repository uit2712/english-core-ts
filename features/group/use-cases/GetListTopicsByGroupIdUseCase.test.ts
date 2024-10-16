import axios from 'axios';

import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { MessageHelper } from '@/core/helpers/MessageHelper';

import { GetListTopicsResult } from '../../topic/models/GetListTopicsResult';
import { GroupApi } from '../facades/GroupApi';

interface DatasetItem {
    id: any;
    expectedResult: Partial<GetListTopicsResult>;
    apiResult?: Partial<GetListTopicsResult>;
}

describe('GetListTopicsByGroupIdUseCase', () => {
    const mockAxiosGet = jest.spyOn(axios, 'get');

    let dataset: DatasetItem[] = [];

    function testInvalidId({ id, expectedResult }: DatasetItem, index: number) {
        it(`invalid id with data set #${index}`, async () => {
            mockAxiosGet.mockResolvedValue({
                data: {
                    success: false,
                    data: [],
                },
            });

            const actualResult = await GroupApi.getListTopics(id);
            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.data).toEqual(expectedResult.data);

            mockAxiosGet.mockReset();
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

    function testInvalidResponseItemId({ id, expectedResult, apiResult }: DatasetItem, index: number) {
        it(`invalid response item id with data set #${index}`, async () => {
            mockAxiosGet.mockResolvedValue({
                data: apiResult,
            });

            const actualResult = await GroupApi.getListTopics(id);
            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.data).toEqual(expectedResult.data);

            mockAxiosGet.mockReset();
        });
    }

    dataset = [
        {
            id: 1,
            expectedResult: {
                success: true,
                data: [],
            },
            apiResult: {
                success: true,
                data: [
                    {
                        id: 0,
                        name: 'ok',
                    },
                ],
            },
        },
        {
            id: 1,
            expectedResult: {
                success: true,
                data: [],
            },
            apiResult: {
                success: true,
                data: [
                    {
                        id: -1,
                        name: 'ok',
                    },
                ],
            },
        },
    ];
    for (let index = 0; index < dataset.length; index++) {
        testInvalidResponseItemId(dataset[index], index);
    }

    function testInvalidResponseItemName({ id, expectedResult, apiResult }: DatasetItem, index: number) {
        it(`invalid response item name with data set #${index}`, async () => {
            mockAxiosGet.mockResolvedValue({
                data: apiResult,
            });

            const actualResult = await GroupApi.getListTopics(id);
            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.data).toEqual(expectedResult.data);

            mockAxiosGet.mockReset();
        });
    }

    dataset = [
        {
            id: 1,
            expectedResult: {
                success: true,
                data: [],
            },
            apiResult: {
                success: true,
                data: [
                    {
                        id: 1,
                        name: '',
                    },
                ],
            },
        },
        {
            id: 1,
            expectedResult: {
                success: true,
                data: [],
            },
            apiResult: {
                success: true,
                data: [
                    {
                        id: 1,
                        name: '     ',
                    },
                ],
            },
        },
    ];
    for (let index = 0; index < dataset.length; index++) {
        testInvalidResponseItemName(dataset[index], index);
    }

    it('network error', async () => {
        mockAxiosGet.mockRejectedValue(new Error('Network Error'));
        const expectedResult = {
            success: false,
            data: [],
            message: 'Network Error',
        };

        const actualResult = await GroupApi.getListTopics(1);

        expect(actualResult.success).toEqual(expectedResult.success);
        expect(actualResult.message).toEqual(expectedResult.message);
        expect(actualResult.data).toEqual(expectedResult.data);

        mockAxiosGet.mockReset();
    });

    it('valid data', async () => {
        const expectedResult: Partial<GetListTopicsResult> = {
            success: true,
            data: [
                {
                    id: 1,
                    name: 'ok',
                    groupId: 0,
                },
            ],
        };
        mockAxiosGet.mockResolvedValue({
            data: expectedResult,
        });

        const actualResult = await GroupApi.getListTopics(1);

        expect(actualResult.success).toEqual(expectedResult.success);
        expect(actualResult.data).toEqual(expectedResult.data);

        mockAxiosGet.mockReset();
    });
});
