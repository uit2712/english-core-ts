import { ErrorMessage } from '@/core/constants/ErrorMessages';
import { ArrayHelper } from '@/core/helpers/ArrayHelper';
import { MessageHelper } from '@/core/helpers/MessageHelper';
import { StringHelper } from '@/core/helpers/StringHelper';
import { Result } from '@/core/models/Result';

import type { TextToSpeechRepositoryInterface } from '../interface-adapters/TextToSpeechRepositoryInterface';
export class TextToSpeechRepository implements TextToSpeechRepositoryInterface {
    private voices: SpeechSynthesisVoice[] = [];

    private async initVoices() {
        if (ArrayHelper.isHasItems(this.voices) === false) {
            this.voices = await this.getVoices();
        }
    }

    private async getVoices(): Promise<SpeechSynthesisVoice[]> {
        return new Promise((resolve) => {
            let voices = window.speechSynthesis.getVoices();
            if (ArrayHelper.isHasItems(voices)) {
                resolve(voices);
            } else {
                window.speechSynthesis.addEventListener('voiceschanged', function () {
                    voices = window.speechSynthesis.getVoices();
                    resolve(voices);
                });
            }
        });
    }

    async speak(text: string): Promise<Result<any>> {
        let result = new Result<any>();

        if (StringHelper.isHasValue(text) === false) {
            result.message = MessageHelper.format(ErrorMessage.INVALID_PARAMETER, 'text');
            return result;
        }

        await this.initVoices();
        if (ArrayHelper.isHasItems(this.voices) === false) {
            result.message = 'Can not init list voices';
            return result;
        }

        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.getEnglishVoice(); // Choose a specific voice
        utterance.lang = 'en-US';
        // Speak the text
        speechSynthesis.speak(utterance);

        result.success = true;
        return result;
    }

    private getEnglishVoice(): SpeechSynthesisVoice | null {
        if (ArrayHelper.isHasItems(this.voices) === false) {
            return null;
        }

        const foundVoice = this.voices.find((voice) => /en(-|_)GB/.test(voice.lang));
        if (foundVoice) {
            return foundVoice;
        }

        return null;
    }
}
