const User = require("../models/User");

// Register User
const register = async (req, res) => {

    try {

        const {
            fullname,
            email,
            mobile,
            college,
            password
        } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Create new user
        const newUser = new User({
            fullname,
            email,
            mobile,
            college,
            password
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "Registration Successful"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

// Login User
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });

        }

        res.json({
            success: true,
            user
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

// Get All Users
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete User
const deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "User Deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    register,
    login,
    getAllUsers,
    deleteUser
};