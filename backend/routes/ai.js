const express = require("express");

const router = express.Router();

const {
    generateQuestionsController,
    chatController
} = require("../controllers/aiController");

router.post(
    "/generate-questions",
    generateQuestionsController
);

router.post(
    "/chat",
    chatController
);

module.exports = router;