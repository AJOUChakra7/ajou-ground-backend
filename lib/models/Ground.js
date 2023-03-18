const mongoose = require('mongoose');

const GroundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Ground', GroundSchema);