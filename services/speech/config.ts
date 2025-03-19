import {SpeechConfig} from "microsoft-cognitiveservices-speech-sdk";

export const speechConfig = () => {
    const speechConfig = SpeechConfig.fromSubscription(
        process.env.NEXT_PUBLIC_SPEECH_KEY as string,
        process.env.NEXT_PUBLIC_SPEECH_REGION as string
    );
    speechConfig.speechSynthesisVoiceName = "vi-VN-NamMinhNeural"; // Male voice
    speechConfig.speechRecognitionLanguage = "vi-VN";
    return speechConfig;
}