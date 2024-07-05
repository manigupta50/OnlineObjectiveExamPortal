
import { ResponsesRepository } from "./responses.repository.js";

export class ResponsesController {

    constructor() {
        this.responsesRepository = new ResponsesRepository();
    }

    async createResponse(req, res) {
        try{
            const { responses } = req.body;
            const result = await this.responsesRepository.createResponse(responses);
            if(result) {
                res.status(201).send('Responses saved successfully');
            }
        }catch(err) {
            console.log(err);
        }
    }
}