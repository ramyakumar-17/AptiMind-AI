const mongoose = require("mongoose");

const AdminLeaderboardSchema = new mongoose.Schema({

    testId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Test",
        required:true
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    fullname:String,

    email:String,

    score:Number,

    total:Number,

    percentage:Number

},{
    timestamps:true
});

module.exports = mongoose.model(
    "AdminLeaderboard",
    AdminLeaderboardSchema
);