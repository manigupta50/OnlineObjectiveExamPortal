import mongoose from "mongoose";
import { questionsSchema } from "./questions.schema.js";

const Question = mongoose.model('Question', questionsSchema);

export class QuestionsRepository {

    async createQuestion(question, options, correctOption) {
        try{
            const newQuestion = new Question({ question, options, correctOption });
            await newQuestion.save();
            return newQuestion;
        }catch(err) {
            console.log(err);
        }
    }

    async getTenRandomQuestions() {
        try{
            const randomQuestions = await Question.aggregate([ { $sample: { size: 10 } } ]);
            return randomQuestions;
        }catch(err) {
            console.log(err);
        }
    }
}