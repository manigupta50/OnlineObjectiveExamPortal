import mongoose from "mongoose";

export const responsesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    selectedOption: {
        type: String,
    },
    is_correct: {
        type: Boolean,
    },
});

responsesSchema.pre('save', async function (next) {
    const question = await mongoose.model('Question').findById(this.questionId);
    this.is_correct = this.selectedOption === question.correctOption;
    next();
});