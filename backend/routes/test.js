const express = require("express");

const router = express.Router();

const {

createTest,
publishTest,
getPublishedTest,
updateQuestions,
addQuestion,
getTestById,
deletePublishedTest

} = require("../controllers/testController");

router.post("/", createTest);

router.post("/:id/question", addQuestion);

router.put("/:id/questions", updateQuestions);

router.put("/publish/:id", publishTest);

router.get("/published", getPublishedTest);

router.delete("/published", deletePublishedTest);

router.get("/:id", getTestById);

module.exports = router;