import mongoose from "mongoose";
import { responsesSchema } from "../responses/responses.schema.js";

const Response = mongoose.model('Response', responsesSchema);

export class ResultRepository {

    async getResult(userId) {
        try{
            const responses = await Response.find({ userId });
            const correct = responses.filter(response => response.is_correct).length;
            const wrong = responses.length - correct;
            return { correct, wrong };
        }catch(err) {
            console.log(err);
        }
    }
}