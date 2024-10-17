import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { MessageHelper } from '@/core/helpers/MessageHelper';
import { Result } from '@/core/models/Result';

import { TextToSpeechApi } from '../facades/TextToSpeechApi';

interface DatasetItem {
    text: any;
    expectedResult: Partial<Result<any>>;
    apiResult?: Partial<Result<any>>;
}

describe('TextToSpeechUseCase', () => {
    let dataset: DatasetItem[] = [];

    function testInvalidText({ text, expectedResult }: DatasetItem, index: number) {
        it(`invalid text with data set #${index}`, async () => {
            const actualResult = await TextToSpeechApi.speak(text);

            expect(actualResult.success).toEqual(expectedResult.success);
            expect(actualResult.message).toEqual(expectedResult.message);
        });
    }

    dataset = [
        {
            text: null,
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
        {
            text: undefined,
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
        {
            text: 1111,
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
        {
            text: '',
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
        {
            text: '     ',
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
        {
            text: '\n\t',
            expectedResult: {
                success: false,
                message: MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text'),
            },
        },
    ];
    for (let index = 0; index < dataset.length; index++) {
        testInvalidText(dataset[index], index);
    }
});
