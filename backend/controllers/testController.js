const Test = require("../models/Test");

// Create New Test
const createTest = async (req, res) => {

    try {

        // Delete old draft test (not published)
        await Test.deleteMany({ isPublished: false });

        const test = new Test(req.body);

        await test.save();

        res.json({
            success: true,
            test
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Publish Test
const publishTest = async (req, res) => {

    try {

        // Unpublish previous published tests
        await Test.updateMany(
            {},
            {
                isPublished: false
            }
        );

        // Publish selected test
        await Test.findByIdAndUpdate(
            req.params.id,
            {
                isPublished: true
            }
        );

        res.json({
            success: true,
            message: "Test Published Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get Published Test
const getPublishedTest = async (req,res)=>{

try{

const test = await Test.findOne({ isPublished:true });

if(!test){

return res.json(null);

}

res.json({
_id:test._id,
testName:test.testName,
questionCount:test.questionCount,
questions:test.questions
});

}
catch(err){

res.status(500).json({
success:false,
message:err.message
});

}

};
// Save Questions into Test
const updateQuestions = async (req, res) => {

    try {

        const { questions } = req.body;

        const test = await Test.findByIdAndUpdate(

            req.params.id,

            {
                questions: questions
            },

            {
                new: true
            }

        );

        res.json({
            success: true,
            test
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Add Single Question
const addQuestion = async (req, res) => {

    try {

        const test = await Test.findById(req.params.id);

        if (!test) {
            return res.status(404).json({
                success: false,
                message: "Test not found"
            });
        }

        test.questions.push(req.body);

        await test.save();

        res.json({
            success: true,
            test
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};
// Get Test By ID

const getTestById = async (req, res) => {

    try{

        const test = await Test.findById(req.params.id);

        if(!test){

            return res.status(404).json({
                success:false,
                message:"Test not found"
            });

        }

        res.json({
            success:true,
            test
        });

    }

    catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

};
// Delete Published Test

const deletePublishedTest = async (req,res)=>{

    try{

        await Test.deleteMany({
            isPublished:true
        });

        res.json({
            success:true,
            message:"Published Test Deleted"
        });

    }

    catch(err){

        res.status(500).json({
            success:false,
            message:err.message
        });

    }

};

module.exports = {
    createTest,
    addQuestion,
    publishTest,
    getPublishedTest,
    updateQuestions,
    getTestById,
    deletePublishedTest
};