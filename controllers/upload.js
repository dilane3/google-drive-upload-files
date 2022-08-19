import { GoogleDriveService } from "../utils/googleDriveService.js"

export class UploadController {
  static async upload(req, res) {
    const file = req.file

    const response = await GoogleDriveService.uploadGoogleDrive(file)

    console.log({ data: response.data });

    res.json({ message: 'File uploaded successfully' })
  }

  static async getFile(req, res) {
    const result = await GoogleDriveService.getDriveService().files.get({
      fileId: '1gex6Y-Sqel3EdK7-TzdFBbTbgOuCH4DL',
      fields: 'id'
    })

    console.log(result)

    res.json({ data: result })
  }
}