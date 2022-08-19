import express from "express";
import { UploadController } from "../controllers/upload.js";
import { MulterFileHandler } from "../middlewares/multer.js";

const UploadRouter = express.Router();

UploadRouter.post(
  "/upload",
  MulterFileHandler.getInstance().single("file"),
  UploadController.upload
);

UploadRouter.get("/get_file", UploadController.getFile)

export default UploadRouter;