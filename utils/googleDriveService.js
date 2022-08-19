import { google } from "googleapis";
import { Readable } from 'stream'
import * as fs from 'fs'

export class GoogleDriveService {
  static getAuth () {
    return new google.auth.GoogleAuth({
      keyFile: "./service-account.json",
      scopes: 'https://www.googleapis.com/auth/drive'
    });
  }

  static getDriveService = () => {
    const auth = GoogleDriveService.getAuth();

    return google.drive({ version: 'v3', auth });
  }

  static authenticateGoogle = () => {
    const auth = GoogleDriveService.getAuth();

    google.options({ auth });

    return google;
  }

  static uploadGoogleDrive = async (file) => {
    try {
      const fileMetadata = {
        name: file.originalname,
        parents: ['1rTnJwAFqtUnRNk9G6eIdTQtMUlUHbuLQ']
      };
  
      const media = {
        mimeType: file.mimeType,
        body: GoogleDriveService.bufferToStream(file)
      };
  
      const driveService = GoogleDriveService.getDriveService()
  
      const response = await driveService.files.create({
        requestBody: fileMetadata,
        media,
        fields: 'id'
      });
  
      return response
    } catch (err) {
      console.error(err);
    }
  }

  static bufferToStream (file) {
    const stream = fs.createReadStream(file.path)

    return stream
  }
}