const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    ground: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ground',
    },
});

module.export = mongoose.model('Reservation', ReservationSchema);