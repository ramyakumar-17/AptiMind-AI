const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({

    testName:{
        type:String,
        required:true
    },

    questionCount:{
        type:Number,
        required:true
    },

    questions:[
        {
            question:String,
            options:[String],
            correctAnswer:String,
            explanation:String
        }
    ],

    isPublished:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
});

module.exports =
mongoose.model("Test",TestSchema);