const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    studentNumber: String,
}); 

module.exports = mongoose.model('User', UserSchema);
