import mongoose from 'mongoose';

const universitySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        location: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        academic: {
            type: String,
            required: true,
        },
        ielts: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        tuition: {
            type: String,
            required: true,
        },
        other: {
            type: String,
            required: true,
        },
        gre: {
            type: String,
            required: true,
        },
        weather: {
            type: String,
            required: true,
        },
        deadline: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const University = mongoose.model('University', universitySchema);

export default University;
