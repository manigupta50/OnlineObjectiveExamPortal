import mongoose from "mongoose";

export const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctOption: {
        type: String,
        required: true,
    },
});