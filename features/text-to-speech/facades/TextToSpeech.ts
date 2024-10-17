import type { TextToSpeechRepositoryInterface } from '../interface-adapters/TextToSpeechRepositoryInterface';
import { TextToSpeechRepository } from '../repositories/TextToSpeechRepository';

export class TextToSpeech {
    private static repo: TextToSpeechRepositoryInterface;

    public static getRepo() {
        if (!this.repo) {
            this.repo = new TextToSpeechRepository();
        }

        return this.repo;
    }
}
