import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { TEAM_DATA, SERVICES_DATA, MISSION_STATEMENT, COMPANY_NAME } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are a helpful, empathetic, and professional assistant for the website of "${COMPANY_NAME}".

Your Core Knowledge:
Mission: ${MISSION_STATEMENT}

Services:
${SERVICES_DATA.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Team:
${TEAM_DATA.map(t => `- ${t.name} (${t.role}): ${t.tagline}`).join('\n')}

Your Goal:
Answer visitor questions about what Home Connect does, who runs it, and how it helps diaspora parents. 
Keep answers concise (under 3 sentences if possible) and encouraging. 
If asked about pricing or specific case consultations, advise them to contact the Administrator, Mr. Munyaradzi Mzite, via the contact form.
`;

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found. Returning mock response.");
      return "I'm sorry, I cannot connect to the server right now. Please try again later or use the contact form.";
    }

    const ai = new GoogleGenAI({ apiKey });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I didn't quite understand that. Could you rephrase?";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble processing your request right now. Please contact our office directly.";
  }
};
