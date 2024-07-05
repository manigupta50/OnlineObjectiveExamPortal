import express from "express";
import { UsersController } from "./users.controller.js";

const router = express.Router();

const usersController = new UsersController();

// Route for creating a question
router.post("/", (req, res) => {
    usersController.createUser(req, res);
});

export default router;