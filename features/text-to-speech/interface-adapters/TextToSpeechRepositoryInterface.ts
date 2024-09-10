export interface TextToSpeechRepositoryInterface {
    speak(text: string): Promise<void>;
}
