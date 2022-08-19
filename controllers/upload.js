import { GoogleDriveService } from "../utils/googleDriveService.js"

export class UploadController {
  static async upload(req, res) {
    const file = req.file

    const response = await GoogleDriveService.uploadGoogleDrive(file)

    console.log({ data: response.data });

    res.json({ message: 'File uploaded successfully' })
  }

  static async getFile(req, res) {
    const fileId = '176TP_KvmeHrMeWADSoFW-BM1e9XOepdU';

    const driver = GoogleDriveService.getDriveService()

    await driver.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: 'anyone'
      }
    })

    const result = await driver.files.get({
      fileId,
      fields: 'webViewLink, webContentLink'
    })

    console.log(result.data)

    res.json({ data: result.data })
  }
}