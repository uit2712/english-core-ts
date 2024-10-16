import { GroupApi } from '../facades/GroupApi';

const axios = require('axios');

let dataset: any[] = [];

describe('GetAllGroupsUseCase', () => {
    it('get empty data', async () => {
        const expectedResult = {
            success: false,
            data: [],
        };
        axios.get.mockReturnValue({
            data: expectedResult,
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
            axios.get.mockReturnValue({
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
});
