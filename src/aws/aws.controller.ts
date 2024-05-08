import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from './aws.service';

@Controller('/api/video')
export class VideoController {
  constructor(private readonly s3Service: S3Service) {}

  // POST endpoint for uploading videos
  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // Intercepts file uploads
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File, // Decorator to get the uploaded file
  ): Promise<string> {
    const bucketName = process.env.AWS_BUCKET_NAME; // Fetch the AWS bucket name from environment variables
    const key = `${file.originalname}`; // Generate the key where the file will be stored in the bucket
    return this.s3Service.uploadVideo(file, bucketName, key); // Delegate the file upload to the S3 service
  }
}
