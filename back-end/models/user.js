const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        default: '', // Provide a default value or handle it according to your application logic
    },
});

const User = mongoose.model('users', userSchema,'user');

module.exports = User;
