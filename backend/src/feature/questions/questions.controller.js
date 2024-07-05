
import { QuestionsRepository } from "./questions.repository.js";

export class QuestionsController {

    constructor() {
        this.questionsRepository = new QuestionsRepository();
    }

    async createQuestion(req, res) {
        try{
            const { question, options, correctOption } = req.body;
            const result = await this.questionsRepository.createQuestion(question, options, correctOption);
            if(result) {
                res.status(201).send(result);
            }
        }catch(err) {
            console.log(err);
        }
    }

    async getTenRandomQuestions(req, res) {
        try{
            const result = await this.questionsRepository.getTenRandomQuestions();
            if(result) {
                res.status(200).send(result);
            }
        }catch(err) {
            console.log(err);
        }
    }
}