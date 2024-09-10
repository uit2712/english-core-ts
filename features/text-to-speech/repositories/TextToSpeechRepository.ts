import { StringHelper } from '@/core/helpers/StringHelper';
import { TextToSpeechRepositoryInterface } from '../interface-adapters/TextToSpeechRepositoryInterface';
import { ArrayHelper } from '@/core/helpers/ArrayHelper';

export class TextToSpeechRepository implements TextToSpeechRepositoryInterface {
    private voices: SpeechSynthesisVoice[] = [];

    private initVoices() {
        if (ArrayHelper.isHasItems(this.voices) === false) {
            this.voices = speechSynthesis.getVoices();
        }
    }

    async speak(text: string): Promise<void> {
        if (StringHelper.isHasValue(text) === false) {
            return;
        }

        this.initVoices();
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
