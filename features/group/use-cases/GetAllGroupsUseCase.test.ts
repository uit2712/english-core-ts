import axios from 'axios';

import { GroupApi } from '../facades/GroupApi';

let dataset: any[] = [];

describe('GetAllGroupsUseCase', () => {
    const mockAxiosGet = jest.spyOn(axios, 'get');

    it('get empty data', async () => {
        const expectedResult = {
            success: false,
            data: [],
        };
        mockAxiosGet.mockResolvedValue({
            data: {
                success: false,
                data: [],
            },
        });

        const actualResult = await GroupApi.getAll();

        expect(actualResult.success).toEqual(expectedResult.success);
        expect(actualResult.data).toEqual(expectedResult.data);
    });

    function testReturnEmptyDataBecauseOfInvalidResponse(data: any, index: number) {
        it(`get empty data because of invalid response with data set #${index}`, async () => {
            const expectedResult = {
                success: false,
                data: [],
            };
            mockAxiosGet.mockResolvedValue({
                data,
            });

            const actualResult = await GroupApi.getAll();

            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.data).toEqual(expectedResult.data);
        });
    }

    dataset = [
        {
            success: false,
            data: [null],
        },
        {
            success: false,
            data: [
                {
                    id: 0,
                    name: '123',
                },
            ],
        },
        {
            success: false,
            data: [
                {
                    id: 1,
                    name: '',
                },
            ],
        },
        {
            success: false,
            data: [
                {
                    id: 1,
                    name: '     ',
                },
            ],
        },
    ];
    for (let index = 0; index < dataset.length; index++) {
        testReturnEmptyDataBecauseOfInvalidResponse(dataset[index], index);
    }

    it('network error', async () => {
        mockAxiosGet.mockRejectedValue(new Error('Network Error'));
        const expectedResult = {
            success: false,
            data: [],
            message: 'Network Error',
        };

        const actualResult = await GroupApi.getAll();

        expect(actualResult.success).toEqual(expectedResult.success);
        expect(actualResult.message).toEqual(expectedResult.message);
        expect(actualResult.data).toEqual(expectedResult.data);
    });

    it('get valid data', async () => {
        const expectedResult = {
            success: true,
            data: [
                {
                    id: 1,
                    name: 'Test',
                },
            ],
        };
        mockAxiosGet.mockResolvedValue({
            data: expectedResult,
        });

        const actualResult = await GroupApi.getAll();

        expect(actualResult.success).toEqual(expectedResult.success);
        expect(actualResult.data).toEqual(expectedResult.data);
    });
});
