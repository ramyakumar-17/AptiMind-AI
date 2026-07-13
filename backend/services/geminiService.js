const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateQuestions(topic, difficulty, count)
 {

    const prompt = `
Generate ${count} aptitude questions.

Topic: ${topic}

Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:

[
  {
    "question":"...",
    "options":["A","B","C","D"],
    "correctAnswer":"...",
    "explanation":"..."
  }
]
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    let text = response.text;

    // Remove Markdown code fences if Gemini adds them
    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    // Convert JSON string to JavaScript object
    return JSON.parse(text);
}
async function chatWithAI(question) {

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question
    });

    return response.text;

}

module.exports = {
    generateQuestions,
    chatWithAI
};