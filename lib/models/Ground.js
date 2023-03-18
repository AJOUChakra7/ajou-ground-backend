import mongoose, { model, Schema } from 'mongoose';

const GroundSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Ground || model('Ground', GroundSchema);