import { DocumentAnalysisClient } from "@azure/ai-form-recognizer";

import documentIntelligenceKeyCredential from "@/services/pdfToText/keyCredential";

const documentAnalysisClient = new DocumentAnalysisClient(
    'https://aivhedu.cognitiveservices.azure.com/',
    documentIntelligenceKeyCredential
);

export default documentAnalysisClient;