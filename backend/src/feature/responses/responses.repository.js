import mongoose from "mongoose";
import { responsesSchema } from "./responses.schema.js";

const Response = mongoose.model('Response', responsesSchema);

export class ResponsesRepository {

    async createResponse(responses) {
        try{
            const result = await Response.insertMany(responses);
            return result;
        }catch(err) {
            console.log(err);
        }
    }
}