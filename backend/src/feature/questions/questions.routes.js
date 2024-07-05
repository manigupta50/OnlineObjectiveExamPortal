import express from "express";
import { QuestionsController } from "./questions.controller.js";

const router = express.Router();

const questionsController = new QuestionsController();

// Route for creating a question
router.post("/", (req, res) => {
    questionsController.createQuestion(req, res);
});

// route for fetching 10 random questions
router.get("/", (req, res) => {
    questionsController.getTenRandomQuestions(req, res);
});

export default router;