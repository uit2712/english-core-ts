import { TextToSpeechRepositoryInterface } from '../interface-adapters/TextToSpeechRepositoryInterface';
import { TextToSpeechRepository } from '../repositories/TextToSpeechRepository';

export class TextToSpeech {
    private static repo: TextToSpeechRepositoryInterface;

    private static getRepo() {
        if (!this.repo) {
            this.repo = new TextToSpeechRepository();
        }

        return this.repo;
    }

    public static async speak(text: string) {
        await this.getRepo().speak(text);
    }
}
