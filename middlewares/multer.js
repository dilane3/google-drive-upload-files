import Multer from "multer";

export class MulterFileHandler {
  static getInstance() {
    const multer = Multer({
      storage: Multer.diskStorage({
        destination: (req, file, cb) => {
          console.log({ file });
          cb(null, `uploads`);
        },
        filename: (req, file, cb) => {
          const extension = file.originalname.split(".").pop();

          cb(null, file.fieldname + "-" + Date.now() + "." + extension);
        },
      }),
      // fileFilter: (req, file, cb) => {
      //   console.log(file)
      // },
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    });

    return multer;
  }
}
