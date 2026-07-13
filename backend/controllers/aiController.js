const {
    generateQuestions,
    chatWithAI
} = require("../services/geminiService");

async function generateQuestionsController(req, res) {
    try {
        const { topic, difficulty, count } = req.body;

        const questions = await generateQuestions(
            topic,
            difficulty,
            count
        );

        res.status(200).json({
            success: true,
            data: questions
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function chatController(req, res) {
    try {
        const { question } = req.body;

        const answer = await chatWithAI(question);

        res.status(200).json({
            answer
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            answer: "AI failed to respond."
        });
    }
}

module.exports = {
    generateQuestionsController,
    chatController
};