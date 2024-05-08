import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  private readonly s3: S3;

  constructor() {
    // Initialize AWS S3 client with credentials and region configuration
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  // Method to upload a video file to an S3 bucket
  async uploadVideo(
    file: Express.Multer.File, // Uploaded file object
    bucketName: string, // Name of the S3 bucket
    key: string, // Key/path under which the file will be stored in the bucket
  ): Promise<string> {
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: file.buffer, // File content
    };

    // Upload the file to S3 and wait for the operation to complete
    const result = await this.s3.upload(params).promise();

    // Return the URL of the uploaded file
    return result.Location;
  }
}
