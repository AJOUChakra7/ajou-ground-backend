import mongoose, { model, Schema } from 'mongoose';

const ReservationSchema = new Schema({
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ground: {
        type: Schema.Types.ObjectId,
        ref: 'Ground',
    },
});

export default mongoose.models.Reservation || model('Reservation', ReservationSchema);