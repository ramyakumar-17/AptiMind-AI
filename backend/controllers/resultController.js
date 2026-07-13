const Result = require("../models/Result");
const AdminLeaderboard = require("../models/AdminLeaderboard");

// Save AI Test Result
const saveResult = async (req, res) => {

    try {

        const result = new Result(req.body);

        await result.save();

        res.json({
            success: true,
            message: "Result Saved Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get AI Results
const getResults = async (req, res) => {

    try {

        const results = await Result.find().sort({ _id: -1 });

        res.json(results);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Save Admin Leaderboard
const saveAdminLeaderboard = async (req, res) => {

    try {

        const leaderboard = new AdminLeaderboard(req.body);

        await leaderboard.save();

        res.json({
            success: true,
            message: "Leaderboard Saved"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Admin Leaderboard
const getAdminLeaderboard = async (req, res) => {

    try {

        const leaderboard = await AdminLeaderboard
            .find()
            .sort({ score: -1 });

        res.json(leaderboard);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {

    saveResult,
    getResults,
    saveAdminLeaderboard,
    getAdminLeaderboard

};