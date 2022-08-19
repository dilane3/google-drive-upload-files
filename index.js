import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();

// Some options
const corsOptions = {
  origin: "*",
};

// Use middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Initialize multer
const upload = multer({ dest: "uploads/" });

// Define routes

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/api/upload", upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  return res.json({ message: "File uploaded" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
