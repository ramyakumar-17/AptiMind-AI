const express = require("express");

const router = express.Router();

const {
    saveResult,
    getResults,
    saveAdminLeaderboard,
    getAdminLeaderboard
} = require("../controllers/resultController");

// AI Test Results
router.post("/save", saveResult);

router.get("/", getResults);

// Admin Leaderboard
router.post("/admin", saveAdminLeaderboard);

router.get("/admin", getAdminLeaderboard);

module.exports = router;