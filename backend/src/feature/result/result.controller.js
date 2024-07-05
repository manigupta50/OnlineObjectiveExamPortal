import { ResultRepository } from "./result.repository.js";

export class ResultController {

    constructor() {
        this.resultRepository = new ResultRepository();
    }

    async getResult(req, res) {
        try{
            const { userId } = req.params;
            const result = await this.resultRepository.getResult(userId);
            if(result) {
                res.send({ correct: result.correct, wrong: result.wrong });
            }
        }catch(err) {
            console.log(err);
        }
    }
}