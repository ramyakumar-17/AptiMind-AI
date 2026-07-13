const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({

    userId:String,

    fullname:String,

    email:String,

    testId:String,

    score:Number,

    total:Number,

    percentage:Number

},{
    timestamps:true
});

module.exports = mongoose.model("Result", ResultSchema);