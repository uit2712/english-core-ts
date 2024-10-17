import { TextToSpeech } from '../facades/TextToSpeech';

export class TextToSpeechUseCase {
    public invoke(text: string) {
        return TextToSpeech.getRepo().speak(text);
    }
}
