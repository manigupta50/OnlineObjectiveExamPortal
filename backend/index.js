import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./src/feature/users/users.routes.js";
import responseRoutes from "./src/feature/responses/responses.routes.js";
import questionRoutes from "./src/feature/questions/questions.routes.js";
import resultRoutes from "./src/feature/result/result.routes.js";

const app = express();

// utility middlewares
app.use(bodyParser.json());
app.use(cors());

// middlewares
app.use("/api/users", userRoutes);
app.use("/api/responses", responseRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/results", resultRoutes);


export default app;