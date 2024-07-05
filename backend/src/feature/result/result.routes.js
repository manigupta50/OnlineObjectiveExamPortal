import express from "express";
import { ResultController } from "./result.controller.js";

const router = express.Router();

const resultController = new ResultController();

// Route for creating a question
router.get("/:userId", (req, res) => {
    resultController.getResult(req, res);
});

export default router;