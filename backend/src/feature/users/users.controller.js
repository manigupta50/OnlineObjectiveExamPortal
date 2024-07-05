
import { UsersRepository } from "./users.repository.js";

export class UsersController {

    constructor() {
        this.usersRepository = new UsersRepository();
    }

    async createUser(req, res) {
        try{
            const { name, email } = req.body;
            const result = await this.usersRepository.createUser(name, email);
            if(result) {
                res.status(201).send(result);
            }
        }catch(err) {
            console.log(err);
        }
    }
}