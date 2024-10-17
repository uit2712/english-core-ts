import { TextToSpeechUseCase } from '../use-cases/TextToSpeechUseCase';

export class TextToSpeechApi {
    private static textToSpeechUseCase: TextToSpeechUseCase;

    public static async speak(text: string) {
        if (!this.textToSpeechUseCase) {
            this.textToSpeechUseCase = new TextToSpeechUseCase();
        }

        return this.textToSpeechUseCase.invoke(text);
    }
}
