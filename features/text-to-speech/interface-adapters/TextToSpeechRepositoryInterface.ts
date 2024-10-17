import { Result } from '@/core/models/Result';

export interface TextToSpeechRepositoryInterface {
    speak(text: string): Promise<Result<any>>;
}
