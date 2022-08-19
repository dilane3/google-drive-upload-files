import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UploadRouter from "./routes/routes.js";

const app = express();

// Some options
const corsOptions = {
  origin: "*",
};

// Use middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Define routes
app.use("/api", UploadRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
