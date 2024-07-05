import express from "express";
import { ResponsesController } from "./responses.controller.js";

const router = express.Router();

const responsesController = new ResponsesController();

// Route for creating Responses
router.post("/", (req, res) => {
    responsesController.createResponse(req, res);
});

export default router;