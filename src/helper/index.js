import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateContent = async () => {
  const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: "Give an essay about AI." }],
      },
    ],
  });

  const response = await result.response;
  console.log(response.text());
};

generateContent();
