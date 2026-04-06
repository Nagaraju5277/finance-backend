const User = require('../models/User');
const Record = require('../models/Record');

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// Get all records
exports.getAllRecords = async (req, res, next) => {
    try {
        const records = await Record.find().populate('userId', 'name email');
        res.json(records);
    } catch (error) {
        next(error);
    }
};