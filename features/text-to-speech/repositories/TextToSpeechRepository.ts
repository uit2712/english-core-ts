import { StringHelper } from '@/core/helpers/StringHelper';
import { TextToSpeechRepositoryInterface } from '../interface-adapters/TextToSpeechRepositoryInterface';
import { ArrayHelper } from '@/core/helpers/ArrayHelper';

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
            if (voices.length !== 0) {
                resolve(voices);
            } else {
                window.speechSynthesis.addEventListener('voiceschanged', function () {
                    voices = window.speechSynthesis.getVoices();
                    resolve(voices);
                });
            }
        });
    }

    async speak(text: string): Promise<void> {
        if (StringHelper.isHasValue(text) === false) {
            return;
        }

        await this.initVoices();
        if (ArrayHelper.isHasItems(this.voices) === false) {
            return;
        }

        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.getEnglishVoice(); // Choose a specific voice
        utterance.lang = 'en-US';
        // Speak the text
        speechSynthesis.speak(utterance);
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
